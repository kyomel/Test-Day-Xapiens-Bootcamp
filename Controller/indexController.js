module.exports = {
    index(req, res) {
        res.format({
            'text/html': () => {
                res.send('<p>Hello Salam Kenal!</p>');
            }
        })
    },

    getDataDiri(req, res) {
        let data = req.body;
        res.json({ 
            "status": "success",
            data
        })
    },

    getDataLive(req, res) {
        let reqNama = req.params.nama;
        let reqAlamat = req.params.kota;

        let resReq = "Nama "+reqNama +",Saya tinggal di "+reqAlamat;
        console.log("result: ", resReq)
        res.format({
            'text/html': () => {
                res.send(resReq);
            }
        })
    },

    tambahDiri(req, res) {
        let tambah = req.body;

        let hasilTambah = "Post success";
        console.log("result", tambah);
        res.format({
            'text/html': () => {
                res.send(hasilTambah);
            }
        })
    },

    tambahDiriForm(req, res) {
        let nama = req.body.nama;
        let alamat = req.body.alamat;
        let motivasi_hidup = req.body.motivasi_hidup;

        let restReq = `Saya "${nama}", motivasi hidup saya adalah ${motivasi_hidup}`;
        console.log("result", restReq);
        res.format({
            'text/html': () => {
                res.send(restReq);
            }
        })
    }
}