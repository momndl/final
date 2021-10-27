import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function UpdatePlaygroundInfo(props) {
    const target = useSelector((state) => state.target.data);
    //const [playgroundId, setPlaygroundId] = useState("");
    useEffect(() => {
        console.log("mounted wuhuhuhuh", props);
    }, []);

    function submitHandler(e) {
        e.preventDefault();

        const toUpdate = [];
        const checked = document.querySelectorAll(".updateCheckbox:checked");
        for (let i = 0; i < checked.length; i++) {
            toUpdate.push(checked[i].id);
        }

        fetch("/playgrounds/upgrade.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: props.PlaygrndId,
                toUpdate: toUpdate,
                target: target,
            }),
        }).then((resp) =>
            resp
                .json()
                .then((resp) => {
                    console.log(
                        "RES POST /playgrounds/UPDATEgetplayground.json",
                        resp
                    );
                    //setPlaygroundId(resp.id);
                })
                .catch((err) => {
                    console.log("err in POST /upgrade.json", err);
                })
        );
        props.updateHandler();
    }
    function submitRemoveHandler(e) {
        e.preventDefault();

        const toUpdate = [];
        const checked = document.querySelectorAll(".updateCheckbox:checked");
        for (let i = 0; i < checked.length; i++) {
            toUpdate.push(checked[i].id);
        }
        console.log("checked:", toUpdate);
        fetch("/playgrounds/remove.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: props.PlaygrndId, toUpdate: toUpdate }),
        }).then((resp) =>
            resp
                .json()
                .then((resp) => {
                    console.log(
                        "RES POST /playgrounds/getplayground.json",
                        resp
                    );
                })
                .catch((err) => {
                    console.log("err in POST /remove.json", err);
                })
        );
        props.updateHandler();
    }

    return (
        <div className="updatePlaygroundContainer">
            <h3>
                Update {props.name} {props.address}{" "}
            </h3>
            <p onClick={props.updateHandler}>x</p>
            <p> see something thats not listed?</p>
            <form>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="slide"
                    name="slide"
                />
                <label htmlFor="slide">Slide</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="swing"
                    name="swing"
                />
                <label htmlFor="swing">Swing</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="climbing"
                    name="climbing"
                />
                <label htmlFor="climbing">Climbing Options</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="bench"
                    name="bench"
                />
                <label htmlFor="bench">Bench</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="merry"
                    name="merry"
                />
                <label htmlFor="merry">Merry-Go-Rounds</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="sandpit"
                    name="sandpit"
                />
                <label htmlFor="sandpit">Sandpit</label>
                <button onClick={(e) => submitHandler(e)}>submit</button>
            </form>
            <p> missing something thats listed?</p>
            <form>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="slide"
                    name="slide"
                />
                <label htmlFor="slide">Slide</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="swing"
                    name="swing"
                />
                <label htmlFor="swing">Swing</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="climbing"
                    name="climbing"
                />
                <label htmlFor="climbing">Climbing Options</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="bench"
                    name="bench"
                />
                <label htmlFor="bench">Bench</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="merry"
                    name="merry"
                />
                <label htmlFor="merry">Merry-Go-Rounds</label>
                <input
                    className="updateCheckbox"
                    type="checkbox"
                    id="sandpit"
                    name="sandpit"
                />
                <label htmlFor="sandpit">Sandpit</label>
                <button onClick={(e) => submitRemoveHandler(e)}>submit</button>
            </form>
        </div>
    );
}
