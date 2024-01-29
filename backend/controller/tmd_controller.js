require("dotenv").config();

async function Tmd(req, res) {
    const province = req.query.province;
    const amphoe = req.query.amphoe;
    const tambon = req.query.tambon;
    const url = `https://data.tmd.go.th/nwpapi/v1/forecast/location/hourly/place?province=${province}&amphoe=${amphoe}&tambon=${tambon}`;
    const options = {
        headers: {
            "authorization": `Bearer ${process.env.TMD_TOKEN}`,
            "accept": "application/json"
        }
    }

    try {
        const response = await fetch(url, options);
        if(response.status === 401) {
            return res.status(401).json({ message: "Unauthorized request"});
        }
        const data = await response.json();
        return res.status(200).json(data);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Unexpected Error"});
    }
}

module.exports = Tmd;