import { db } from "../config/db.js";
import calculateDistance from "../utils/distance.js";
import schoolSchema from "../validation/schoolValidation.js"

export const addSchool = (req, res) => {
    try {
        //validation using zod
        const validatedData = schoolSchema.parse(req.body);
        const { name, address, latitude, longitude } = validatedData;

        const query = "INSERT INTO schools(name, address, latitude, longitude)  VALUES (?,?,?,?)";
        //inserting into db
        db.query(query, [name, address, latitude, longitude], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: err.message || "Database error"
                })
            }

            console.log(result)
            return res.status(201).json({
                message: "School added successfully!",
                schoolId: result.insertId
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error.issues?.[0]?.message || "Invalid input"
        })
    }
}

export const listSchools = (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({
                message: "Latitude and Longitude are required"
            })
        }

        const userLatitude = parseFloat(latitude);
        const userLongitude = parseFloat(longitude);

        if (isNaN(userLatitude) || isNaN(userLongitude)) {
            return res.status(400).json({
                message: "Invalid latitude or longitude",
            });
        }

        const query = "SELECT * FROM schools";
        db.query(query, (error, result) => {
            if (error) {
                return res.status(500).json({
                    message: error.message
                })
            }

            const schoolsWithDistance = result.map((scl) => {
                const distance = calculateDistance(
                    userLatitude,
                    userLongitude,
                    scl.latitude,
                    scl.longitude
                );

                return {
                    ...scl, distance: Number(distance.toFixed(2))
                }
            });

            schoolsWithDistance.sort((a, b) => a.distance - b.distance)

            return res.status(200).json({
                message: "Schools fetched successfully!",
                count: schoolsWithDistance.length,
                schools: schoolsWithDistance
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong!"
        })
    }
}