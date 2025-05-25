export class Pagination {
    static getPagination(query: any) {
        const page = parseInt(query.page as string) || 1;
        const limit = parseInt(query.limit as string) || 10;

        const offset = (page - 1) * limit;
        return { page, limit, offset };
    }

    static getMeta(total: number, page: number, limit: number) {
        return {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        };
    }
}
