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
    const [pageState, setPageState] = useState(0);
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
        setPageState(!pageState);
    }

    function handleGeneralChange(newValue, updatedField) {
        setGeneralInformation({
            ...generalInformation,
            [updatedField]: newValue,
        });
    }

    function handleEducationalChange(newValue, updatedField) {
        setEducationalExperience({
            ...educationalExperience,
            [updatedField]: newValue,
        });
    }

    function handlePracticalChange(newValue, updatedField) {
        setPracticalExperience({
            ...practicalExperience,
            [updatedField]: newValue,
        });
    }



    return (
        <>
            <h1>Resume Builder</h1>
            <GeneralInformation
                genInfo={generalInformation}
                pageState={pageState}
                onChange={(newValue, updatedField) =>
                    handleGeneralChange(newValue, updatedField)
                }
                value={generalInformation}
            />
            <EducationalExperience
                eduExp={educationalExperience}
                pageState={pageState}
                onChange={(newValue, updatedField) =>
                    handleEducationalChange(newValue, updatedField)
                }
            />
            <PracticalExperience
                pracExp={practicalExperience}
                pageState={pageState}
                onChange={(newValue, updatedField) =>
                    handlePracticalChange(newValue, updatedField)
                }
            />
            <SaveEditButton className='saveEdit'pageState={pageState} onClick={handlePageChange} />
        </>
    );
}

export default App;
