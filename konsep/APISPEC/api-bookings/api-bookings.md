```
GET api/bookings/my-bookings

response 200
{
    "success": true,
    "statusCode": 200,
    "message": "Data pesanan ditemukan!",
    "data": [
        {
            "id": 1,
            "tenantId": 1,
            "ownerId": 1,
            "propertyId": 3,
            "checkInDate": "2025-06-01T14:00:00.000Z",
            "duration": 6,
            "monthlyPrice": 5000000,
            "deposit": 500000,
            "totalAmount": 30500000,
            "status": "ACTIVE",
            "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
            "paymentLink": null,
            "createdAt": "2025-05-25T13:44:12.000Z",
            "updatedAt": "2025-05-26T00:10:59.002Z",
            "property": {
                "id": 3,
                "ownerId": 1,
                "name": "Villa Sunset 3",
                "description": "Villa mewah dengan pemandangan laut.",
                "address": "Jl. Pantai Indah No. 12, Bali",
                "city": "Bali",
                "price": 5000000,
                "totalRooms": 3,
                "availableRooms": 1,
                "status": "DELETED",
                "images": "https://res.cloudinary.com/dglcmrrhx/image/upload/v1748179665/1.1.jpg_1748179761630.jpg",
                "createdAt": "2025-05-25T13:29:24.661Z",
                "updatedAt": "2025-05-25T23:24:59.739Z"
            },
            "owner": {
                "id": 1,
                "email": "fazaabiyyu15@gmail.com"
            }
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 1,
        "totalPages": 1
    }
}



POST api/bookings

request
{
    "propertyId": 3,
    "checkInDate": "2025-06-01T14:00:00.000Z",
    "duration": 6,
    "deposit": 500000,
    "notes": "Saya ingin memesan kamar dengan pemandangan terbaik."
}


response 201
{
    "success": true,
    "statusCode": 201,
    "message": "Booking berhasil dibuat!",
    "data": {
        "id": 3,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 6,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 30500000,
        "status": "PENDING",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T07:37:26.463Z",
        "updatedAt": "2025-05-25T07:37:26.463Z"
    }
}


PUT api/bookings/:id
request
{
    "propertyId": 3,
    "checkInDate": "2025-06-01T14:00:00.000Z",
    "duration": 4,
    "deposit": 500000,
    "notes": "Saya ingin memesan kamar dengan pemandangan terbaik."
}


repsponse 200
{
    "success": true,
    "statusCode": 200,
    "message": "Pengguna berhasil diubah!",
    "data": {
        "id": 3,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 4,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 20500000,
        "status": "PENDING",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T07:37:26.463Z",
        "updatedAt": "2025-05-25T08:30:58.495Z"
    }
}


GET api/bookings/:id
response 200
{
    "success": true,
    "statusCode": 200,
    "message": "Pengguna ditemukan!",
    "data": {
        "id": 3,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 4,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 20500000,
        "status": "PENDING",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T07:37:26.463Z",
        "updatedAt": "2025-05-25T08:30:58.495Z",
        "tenant": {
            "id": 1,
            "email": "fazaabiyyu15@gmail.com"
        },
        "owner": {
            "id": 1,
            "email": "fazaabiyyu15@gmail.com"
        },
        "property": {
            "id": 3,
            "ownerId": 1,
            "name": "Villa Sunset",
            "description": "Villa mewah dengan pemandangan laut.",
            "address": "Jl. Pantai Indah No. 12, Bali",
            "city": "Bali",
            "price": 5000000,
            "totalRooms": 3,
            "availableRooms": 1,
            "status": "ACTIVE",
            "images": "",
            "createdAt": "2025-05-25T06:18:21.127Z",
            "updatedAt": "2025-05-25T07:37:26.471Z"
        },
        "bookingLogs": []
    }
}


PATCH api/bookings/:id/complete
response 200
{
    "code": 200,
    "message": "Status properti berhasil diperbarui!",
    "data": {
        "id": 1,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 6,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 30500000,
        "status": "COMPLETED",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T13:44:12.000Z",
        "updatedAt": "2025-05-25T23:38:14.582Z"
    }
}


PATCH api/bookings/:id/activate
response 200
{
    "code": 200,
    "message": "Status properti berhasil diperbarui!",
    "data": {
        "id": 1,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 6,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 30500000,
        "status": "ACTIVE",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T13:44:12.000Z",
        "updatedAt": "2025-05-25T23:33:36.925Z"
    }
}


PATCH api/bookings/:id/confirm
response 200
{
    "code": 200,
    "message": "Status properti berhasil diperbarui!",
    "data": {
        "id": 1,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 6,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 30500000,
        "status": "CONFIRMED",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T13:44:12.000Z",
        "updatedAt": "2025-05-25T23:37:23.273Z"
    }
}


PATCH api/bookings/:id/reject
reponse 200
{
    "code": 200,
    "message": "Status properti berhasil diperbarui!",
    "data": {
        "id": 1,
        "tenantId": 1,
        "ownerId": 1,
        "propertyId": 3,
        "checkInDate": "2025-06-01T14:00:00.000Z",
        "duration": 6,
        "monthlyPrice": 5000000,
        "deposit": 500000,
        "totalAmount": 30500000,
        "status": "CANCELLED",
        "notes": "Saya ingin memesan kamar dengan pemandangan terbaik.",
        "paymentLink": null,
        "createdAt": "2025-05-25T13:44:12.000Z",
        "updatedAt": "2025-05-25T23:37:55.864Z"
    }
}
```