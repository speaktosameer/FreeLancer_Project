import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive , MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

export const StatsData = [
    {
        icon: (<GiEarthAmerica 
        css={`
        color: #047bf1;
        `}
        />),
        title: "Browse portfolios",
        desc: "Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.",
    },
    {
        icon: (<MdAirplanemodeActive
            css={`
        color: #f3a82e;
        `}
        />),
        title: "Fast bids",
        desc: "Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.",
    },
    {
        icon: (<MdTimer
            css={`
        color: #f34f2e;
        `}
        />),
        title: "Quality work",
        desc: "Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.",
    },
    {
        icon: (<FaMoneyCheck
            css={`
        color: #3af576;
        `}
        />),
        title: "Track progress",
        desc: "Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.",
    },
]
