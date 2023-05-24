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
    const [editMode, setEditMode] = useState(false);

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

    function handleFormOpen(id?: string) {
        //? notes an optional parameter
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    return (
        <Fragment>
            <NavBar openForm={handleFormOpen} />
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                ></ActivityDashboard>
            </Container>
        </Fragment>
    );
}

export default App;
