

exports.getPlants = (req, res, next) => {
    return res.status(200).json(
        [
            {"name": "I'm a plant!"}
        ]
    )
}