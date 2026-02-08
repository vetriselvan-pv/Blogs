
install the dependency 
npm i dotenv express @prisma/client @prisma/adapter-pg pg


npm install -D typescript ts-node @types/node @types/express nodemon prisma @types/node @types/pg

npx tsc --init

npx prisma init

Folder structure for the 

src/
│
├── app.ts                     # Express app config
├── server.ts                  # App bootstrap
│
├── config/
│   ├── env.ts                 # Environment variables
│   ├── prisma.ts              # Prisma client
│   └── roles.ts               # Role constants
│
├── modules/
│   └── user/
│       ├── user.routes.ts
│       ├── user.controller.ts
│       ├── user.service.ts
│       ├── user.repository.ts
│       ├── user.schema.ts     # Zod validation
│       └── user.types.ts
│
├── middlewares/
│   ├── auth.middleware.ts     # JWT auth
│   ├── role.middleware.ts     # RBAC
│   ├── validate.middleware.ts # Zod validation
│   └── error.middleware.ts    # Central error handler
│
├── utils/
│   ├── ApiError.ts
│   ├── asyncHandler.ts
│   └── response.ts
│
└── types/
    └── express.d.ts           # Extend Request (req.user)

modules/

Feature-based (user, auth, product, etc.)

Everything related to User CRUD lives together
Easy to scale, delete, or extract later


middlewares/

Reusable request guards & filters

| Middleware | Purpose                |
| ---------- | ---------------------- |
| `auth`     | Verify JWT             |
| `role`     | Role-based access      |
| `validate` | Zod schema validation  |
| `error`    | Central error handling |

utils/

Framework-agnostic helpers

Custom errors

Async wrapper

Standard API responses



Client
  ↓
Route
  ↓
Auth Middleware
  ↓
Role Middleware
  ↓
Zod Validation
  ↓
Controller
  ↓
Service
  ↓
Repository (Prisma)
  ↓
PostgreSQL
  ↓
Response

Route 
router.post(
  "/",
  requireAuth,
  requireRole("ADMIN"),
  validate(createUserSchema),
  createUser
);


middleware 

auth middleware
export const requireAuth = asyncHandler((req, _, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  const payload = verifyToken(token);
  req.user = payload;
  next();
});

role middleware
export const requireRole = (...roles: string[]) => {
  return (req, _, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ApiError(403, "Forbidden");
    }
    next();
  };
};

Validation — user.schema.ts (Zod)
export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(["ADMIN", "USER"]),
  }),
});



Controller — user.controller.ts
export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

Service — user.service.ts
export const createUser = async (data) => {
  const exists = await userRepo.findByEmail(data.email);
  if (exists) {
    throw new ApiError(409, "User already exists");
  }

  data.password = await hashPassword(data.password);
  return userRepo.create(data);
};

Repository — user.repository.ts
export const create = (data) => {
  return prisma.user.create({ data });
};

Error Handling — error.middleware.ts
export const errorHandler = (err, _, res, __) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.message,
  });
};