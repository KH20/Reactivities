import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        //On compoenent load
        axios.get("http://localhost:50000/api/activities").then((response) => {
            //Get activities, and set activities state
            setActivities(response.data);
        });
    }, []);

    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard activities={activities}></ActivityDashboard>
            </Container>
        </Fragment>
    );
}

export default App;
