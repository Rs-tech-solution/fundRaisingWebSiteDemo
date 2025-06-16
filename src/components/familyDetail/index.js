import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FamilyDetail = ({
  familyName,
  setFamilyName,
  relation,
  setRelation,
  gotram,
  setGotram,
  rashi,
  setRashi,
  nakshatram,
  setNakshataram,
  dob,
  setDob,
  birthTime,
  setBirthTime,
  addtionalDetail,
  setAdditionalDetail,
  showDob,
  setShowDob,
  relations,
  rashies,
  nakshatrams,
  input_group,
  activeSelect,
  input,
  birthDetail,
  buttonGroup,
  hideDob,
  activeBtn,
  activeBtnClassName,
  nextStep,
}) => {
  return (
    <>
      <h5>Family Details</h5>
      <div className={`${input_group}`}>
        <div className={`${input}`}>
          <input
            type="text"
            placeholder="name *"
            id="name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />
        </div>
      </div>
      <div className={`${input_group}`}>
        <input
          type="text"
          placeholder="gotram *"
          id="gotram"
          value={gotram}
          onChange={(e) => setGotram(e.target.value)}
        />
        <select
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          className={`${relation !== "relation" ? activeSelect : ""}`}
        >
          <option value={"relation"} disabled>
            Relation
          </option>
          {relations.map((relation, index) => (
            <option key={index} value={relation}>
              {relation}
            </option>
          ))}
        </select>
      </div>

      <div className={`${birthDetail}`}>
        <div>
          <h6>Birth details</h6>
          <div>
            {showDob ? (
              <FaAngleUp size={18} onClick={() => setShowDob(false)} />
            ) : (
              <FaAngleDown size={18} onClick={() => setShowDob(true)} />
            )}
          </div>
        </div>
        <p>
          These details will help us recommend special Sevas based on your
          Horoscope.
        </p>
      </div>

      <div className={`${showDob ? input_group : hideDob} `}>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="time"
          value={birthTime}
          onChange={(e) => setBirthTime(e.target.value)}
        />
      </div>

      <div className={`${input_group}`}>
        <select
          value={rashi}
          onChange={(e) => setRashi(e.target.value)}
          className={`${rashi !== "rashi" ? activeSelect : ""}`}
        >
          <option value={"rashi"} disabled>
            rashi
          </option>
          {rashies.map((rashi, index) => (
            <option key={index} value={rashi}>
              {rashi}
            </option>
          ))}
        </select>
        <select
          value={nakshatram}
          onChange={(e) => setNakshataram(e.target.value)}
          className={`${nakshatram !== "nakshatram" ? activeSelect : ""}`}
        >
          <option value={"nakshatram"} disabled>
            nakshatram
          </option>
          {nakshatrams.map((nakshatram, index) => (
            <option key={index} value={nakshatram}>
              {nakshatram}
            </option>
          ))}
        </select>
      </div>
      <div className={`${input_group}`}>
        <div className={`${input}`}>
          <input
            type="text"
            placeholder="Additional Detail"
            value={addtionalDetail}
            onChange={(e) => setAdditionalDetail(e.target.value)}
          />
        </div>
      </div>
      <div className={`${buttonGroup}`}>
        <button
          className={`${activeBtn == "save" ? activeBtnClassName : ""}`}
          onClick={() => nextStep()}
        >
          save & add another
        </button>
        <button
          className={`${activeBtn == "saveOnly" ? activeBtnClassName : ""}`}
          onClick={() => nextStep()}
        >
          save
        </button>
      </div>
    </>
  );
};

export default FamilyDetail;
