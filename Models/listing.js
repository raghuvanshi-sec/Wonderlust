const mongoose= require("mongoose");
const Schema= mongoose.Schema;


const listingSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    image: {
        url: {
            type: String,
            default:
                "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            set: (v) =>
                v === ""
                    ? "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    : v,
        },
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
});


const Listing= mongoose.model("Listing", listingSchema);
module.exports= Listing;