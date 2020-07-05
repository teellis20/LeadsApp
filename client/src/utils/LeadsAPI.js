import axios from "axios";

export default {
    saveLead: function(toSave) {
        console.log("saveLead happening ", toSave);
        return axios.post("/api/leads", toSave);
    },
    deleteLead: function(email) {
        return axios.delete("/api/leads/" + email)
    }
}

