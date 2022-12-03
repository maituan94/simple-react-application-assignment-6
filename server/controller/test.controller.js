const test = (req, res) => {
    return res.status(200).json({
        statusCode: 200,
        message: "Testing Message"
    })
}

export default test;
