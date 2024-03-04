import axios from "axios";

export async function getDomains(root) {
    var resp = await axios({
        url: root + "/domains",
        method: "GET"
    })

    if(resp.status == 200) {
        return resp.data;
    } else {
        return [];
    }
}

export async function getTokens(root, domainID) {
    var resp = await axios({
        url: root + "/tokens/" + domainID,
        method: "GET"
    })

    if(resp.status == 200) {
        return resp.data;
    } else {
        return [];
    }
}

export async function mintRequest(root, domain, token, to) {
    var resp = await axios({
        url: root + "/drip/" + domain + "/" + token + "/to/" + to,
        method: "GET"
    })
    
    if(resp.status == 200) {
        return resp.data;
    } else {
        console.log(resp.status + " mint request failed: " + resp.data)
        return {};
    }
}