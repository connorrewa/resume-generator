import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SaveEditButton from "./components/SaveEditButton";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

function App() {
    //bring data logic to here ... add conditional form component or display component based on if state is saved or on editing setting
    //add state for saved / editing
    const [pageState, setPageState] = useState("editing");
    const [generalInformation, setGeneralInformation] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [educationalExperience, setEducationalExperience] = useState({
        school: "",
        study: "",
        date: "",
    });
    const [practicalExperience, setPracticalExperience] = useState({
        company: "",
        position: "",
        responsibilities: "",
        dateStart: "",
        dateEnd: "",
    });

    function handlePageChange() {
        setPageState(pageState ? 0 : 1);
    }

    function handleGeneralChange(newValue, updatedField) {
        if (updatedField === "name") {
            setGeneralInformation({ ...generalInformation, name: newValue });
        } else if (updatedField === "email") {
            setGeneralInformation({ ...generalInformation, email: newValue });
        } else {
            setGeneralInformation({ ...generalInformation, phone: newValue });
        }
    }

    return (
        <>
            <h1>Resume Builder</h1>
            <GeneralInformation
                genInfo={generalInformation}
                pageState={pageState}
				onChange={(newValue, updatedField) => handleGeneralChange(newValue, updatedField)}
				value={generalInformation}
            />
            <EducationalExperience
                eduExp={educationalExperience}
                pageState={pageState}
            />
            <PracticalExperience
                pracExp={practicalExperience}
                pageState={pageState}
            />
            <SaveEditButton pageState={pageState} onClick={handlePageChange} />
        </>
    );
}

export default App;
