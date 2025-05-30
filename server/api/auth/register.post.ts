import bcrypt from "bcryptjs";
import { RegisterRequest} from "~/types/AuthType";
import { User } from "~/server/models/User";
import { ResponseHandler } from "~/server/utils/ResponseHandler";
import { ErrorHandler } from "~/server/utils/ErrorHandler";

export default defineEventHandler(async (event) => {
    try {
        const data: RegisterRequest = await readBody(event);

        if (!data.email || !data.password) {
            setResponseStatus(event, 400);
            return{
                statusCode: 400,
                statusMessage: "Harap berikan semua kolom yang diperlukan (email dan kata sandi).",
            };
        }

        const hashedPassword = bcrypt.hashSync(data.password, 10);
        const user = await User.registerUser({
            email: data.email,
            password: hashedPassword,
            profile: {
                name: data.profile?.name ?? "",
                phone: data.profile?.phone ?? "",
                address: data.profile?.address ?? "",
            },
        });

        return ResponseHandler.sendCreated(
            event,
            "Pengguna berhasil terdaftar!",
            {
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    profile: user.profile,
                },
            },
            201 // Status kode
        );
    } catch (error: any) {
        return ErrorHandler.handleError(event, error);
    }
});
