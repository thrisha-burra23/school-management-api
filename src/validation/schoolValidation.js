import { z } from "zod";

//accepting both number type and string type inputs
const numberSchema = z.union([
    z.number(),
    z.string().min(1, "Value is required").transform((val) => Number(val)),
]);

const schoolSchema = z.object({
    name: z.string().min(1, "Name cannot be empty"),

    address: z.string().min(1, "Address cannot be empty"),

    latitude: numberSchema
        .refine((val) => !isNaN(val), "Latitude must be a number")
        .refine((val) => val >= -90 && val <= 90, "Latitude must be between -90 and 90"),

    longitude: numberSchema
        .refine((val) => !isNaN(val), "Longitude must be a number")
        .refine((val) => val >= -180 && val <= 180, "Longitude must be between -180 and 180"),
});

export default schoolSchema;