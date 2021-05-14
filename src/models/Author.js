import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Author = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        birth: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            required: true,
        },

        belong: {
            type: String,
            required: true,
        },

        books : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : `Book` ,
            },
        ],
    },

    {
        versionKey: false,
    }
)

export default mongoose.model(`Author`,Author,`Author`);