import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<
        Activity | undefined
    >(undefined);

    useEffect(() => {
        //On component load
        axios.get("http://localhost:50000/api/activities").then((response) => {
            //Get activities, and set activities state
            setActivities(response.data);
        });
    }, []);

    function handleSelectActivity(id: string) {
        setSelectedActivity(activities.find((activity) => activity.id === id));
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                ></ActivityDashboard>
            </Container>
        </Fragment>
    );
}

export default App;
