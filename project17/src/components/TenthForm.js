import React, { useRef } from "react";

function TenthForm() {
  let nameInputRef = useRef();
  let rollNoInputRef = useRef();
  let maleInputRef = useRef();
  let femaleInputRef = useRef();
  let stateSelectInputRef = useRef();
  let teluguInputRef = useRef();
  let englishInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();
  let paraResultRef = useRef();
  let passMarks = 35;

  let teluguSpanRef = useRef();
  let englishSpanRef = useRef();
  let mathsSpanRef = useRef();
  let hindiSpanRef = useRef();
  let scienceSpanRef = useRef();
  let socialSpanRef = useRef();

  let selectedGender;
  let maritalStatus;
  let salutation;
  let languagesKnown = {
    tel: false,
    hin: false,
    eng: false,
    urd: false,
    sans: false,
    tam: false,
  };

  let inputOnChange = (inputRef, spanRef, passMarks = 35) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= passMarks) {
        spanRef.current.innerHTML = "pass";
        spanRef.current.style.color = "green";
      } else {
        spanRef.current.innerHTML = "fail";
        spanRef.current.style.color = "red";
      }
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.color = "blue";
      paraResultRef.current.style.display = "none";
    }
  };

  let tenthResults = () => {
    let telugu = Number(teluguInputRef.current.value);
    let hindi = Number(hindiInputRef.current.value);
    let english = Number(englishInputRef.current.value);
    let maths = Number(mathsInputRef.current.value);
    let science = Number(scienceInputRef.current.value);
    let social = Number(socialInputRef.current.value);

    let totalMarks = telugu + hindi + english + maths + science + social;
    let perc = (totalMarks / 600) * 100;
    let placed;
    if (perc >= 70) {
      placed = "Distinction";
    } else if (perc >= 60 && perc < 70) {
      placed = "First Class";
    } else if (perc >= 50 && perc < 60) {
      placed = "Second Class";
    } else if (perc >= 35 && perc < 50) {
      placed = "Third Class";
    } else {
      placed = "failed";
    }

    if (
      telugu >= passMarks &&
      hindi >= passMarks &&
      english >= passMarks &&
      maths >= passMarks &&
      science >= passMarks &&
      social >= passMarks
    ) {
      paraResultRef.current.innerHTML =
        paraResultRef.current.innerHTML +
        `Result : passed <br> Total Marks: ${totalMarks}<br>
      Percentage: ${perc.toFixed(2)} <br>Placed: ${placed}`;
    } else {
      paraResultRef.current.innerHTML =
        paraResultRef.current.innerHTML +
        `Result : failed <br> Total Marks: ${totalMarks}<br>
            Percentage: ${perc.toFixed(2)}<br> Placed: ${placed}`;
    }
  };

  return (
    <div>
      <form>
        <h2 style={{ textAlign: "center" }}>Tenth Result Form</h2>
        <div>
          <label>Name</label>
          <input ref={nameInputRef}></input>
          <span></span>
        </div>
        <div>
          <label>Roll No</label>
          <input ref={rollNoInputRef}></input>
          <span></span>
        </div>

        <div>
          <label>Gender</label>
          <input
            className="radioSelect"
            type="radio"
            name="gender"
            ref={maleInputRef}
            onChange={() => {
              if (maleInputRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            className="radioSelect"
            type="radio"
            name="gender"
            ref={femaleInputRef}
            onChange={() => {
              if (femaleInputRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            className="radioSelect"
            type="radio"
            name="ms"
            onChange={(maritalEventObj) => {
              if (maritalEventObj.target.checked == true) {
                maritalStatus = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            className="radioSelect"
            type="radio"
            name="ms"
            onChange={(maritalEventObj) => {
              if (maritalEventObj.target.checked == true) {
                maritalStatus = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>

        <div>
          <label>Languages Known </label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.tel = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Telugu</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.hin = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Hindi</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.eng = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>English</label>
        </div>
        <div>
          <label></label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.urd = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Urdhu</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.sans = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Sanskrit</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.tam = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Tamil</label>
        </div>

        <div>
          <label>State </label>
          <select ref={stateSelectInputRef}>
            <option>select state</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="ACP">Arunachal Pradesh</option>
            <option value="ASM">Assam</option>
            <option value="BH">Bihar</option>
            <option value="CHG">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="GR">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="MGL">Meghalaya</option>
            <option value="MZR">Mizoram</option>
            <option value="NG">Nagaland</option>
            <option value="OD">Odisha</option>
            <option value="PJ">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TS">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UK">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>
        </div>
        <div>
          <label>Telugu</label>
          <input
            ref={teluguInputRef}
            onChange={() => {
              inputOnChange(teluguInputRef, teluguSpanRef);
            }}
          ></input>
          <span ref={teluguSpanRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            ref={englishInputRef}
            onChange={() => {
              inputOnChange(englishInputRef, englishSpanRef);
            }}
          ></input>
          <span ref={englishSpanRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            ref={hindiInputRef}
            onChange={() => {
              inputOnChange(hindiInputRef, hindiSpanRef);
            }}
          ></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>Mathematics</label>
          <input
            ref={mathsInputRef}
            onChange={() => {
              inputOnChange(mathsInputRef, mathsSpanRef);
            }}
          ></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            ref={scienceInputRef}
            onChange={() => {
              inputOnChange(scienceInputRef, scienceSpanRef);
            }}
          ></input>
          <span ref={scienceSpanRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            ref={socialInputRef}
            onChange={() => {
              inputOnChange(socialInputRef, socialSpanRef);
            }}
          ></input>
          <span ref={socialSpanRef}></span>
        </div>
        <div className="resultButton">
          <button
            type="button"
            onClick={() => {
              console.log(languagesKnown);
              if (selectedGender == "male") {
                salutation = "Mr.";
              } else {
                if (maritalStatus == "single") {
                  salutation = "Miss.";
                } else {
                  salutation = "Mrs.";
                }
              }
              paraResultRef.current.innerHTML = `${salutation} ${
                nameInputRef.current.value
              }
                 from ${stateSelectInputRef.current.value},<br>knows 
                 ${languagesKnown.tel == true ? "Telugu" : ""},
                 ${languagesKnown.hin == true ? "Hindi" : ""},
                 ${languagesKnown.eng == true ? "English" : ""},
                 ${languagesKnown.urd == true ? "Urdhu" : ""},
                 ${languagesKnown.sans == true ? "Sanskrit" : ""},
                 ${languagesKnown.tam == true ? "Tamil" : ""},
                 <br>`;
              tenthResults();
            }}
          >
            Result
          </button>
        </div>
        <p ref={paraResultRef}></p>
        <p></p>
      </form>
    </div>
  );
}

export default TenthForm;
