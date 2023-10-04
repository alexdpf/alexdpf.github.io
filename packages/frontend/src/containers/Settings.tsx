//EXCLUDING STEPS THAT HAVE TO DO WITH CREATING STRIPE PAYMENT GATEWAY

import { useState } from "react";
// @ts-expect-error: This is a temporary workaround for issue 
import config from "../config";
import { API } from "aws-amplify";
// @ts-expect-error: This is a temporary workaround for issue 
import { onError } from "../lib/errorLib";
import { useNavigate } from "react-router-dom";
import { BillingType } from "../types/billing";

//
export default function Settings() {
    // @ts-expect-error: This is a temporary workaround for issue 
    const nav = useNavigate();
    // @ts-expect-error: This is a temporary workaround for issue 
    const [isLoading, setIsLoading] = useState(false);

    // @ts-expect-error: This is a temporary workaround for issue 
    function billUser(details: BillingType) {
        return API.post("notes", "/billing", {
            body: details,
        });
    }

    return <div className="Settings"></div>;
}