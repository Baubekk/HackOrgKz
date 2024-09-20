import PromptCard from "./PromptCard";
import React, { useState } from "react";
import MyInput from "./input/MyInput";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const [teamName, setTeamName] = useState('');
  const [teamMate, setTeamMate] = useState('');
  const [points, setPoints] = useState([0 ]);

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleTeamMateChange = (e) => {
    setTeamMate(e.target.value);
  };

  const handlePointsChange = (index) => (e) => {
    const newPoints = [...points];
    newPoints[index] = parseInt(e.target.value, 10);
    setPoints(newPoints);
  };

  const calculateTotalPoints = () => {
    return points.reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>


      <div className='mt-10'>
        <h2>Add a Team</h2>
        <MyInput 
          value={teamName}
          onChange={handleTeamNameChange}
          type="text" 
          placeholder="Team Name"
        />

        <MyInput 
          value={teamMate}
          onChange={handleTeamMateChange}
          type="text" 
          placeholder="Team Mate"
        />

        {points.map((point, index) => (
          <MyInput 
            key={index}
            value={point}
            onChange={handlePointsChange(index)}
            type="number" 
            placeholder={`Point ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;