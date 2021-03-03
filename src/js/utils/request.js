import defaults from "superagent-defaults";
import { TWITTER_BEARER_TOKEN } from "../constants/apiKeys";
export default function request() {
    const superagent = defaults();

    const defaultRequest = superagent
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .set("Authorization", `Bearer ${TWITTER_BEARER_TOKEN}`)

    return defaultRequest;
}

/*
import request from "utils/request";

...
    return request()
        .get(`${rootUrl}/v1/admin/plans`)
        .send(data);
}

*/