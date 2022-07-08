const Skills = () => {

  const hardSkills = [
    {
      name: 'JavaScript',
      level: '90%',
      icon: 'js'
    },
    {
      name: 'React.js',
      level: '90%',
      icon: 'react'
    },
    {
      name: 'Node.js',
      level: '90%',
      icon: 'node'
    },
    {
      name: 'HTML',
      level: '90%',
      icon: 'html5'
    },
    {
      name: 'CSS',
      level: '90%',
      icon: 'css3'
    },
    {
      name: 'Sequelize',
      level: '90%',
      icon: 'sequelize'
    },
    {
      name: 'Github',
      level: '90%',
      icon: 'github'
    },
    {
      name: 'Linux',
      level: '90%',
      icon: 'linux'
    },
    {
      name: 'Git',
      level: '90%',
      icon: 'git'
    }
  ];


  return (
    <div name="Skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {hardSkills.map(({ name, level, icon }) => (
          <div key={name} className="skill">
            <div className="skill-icon">
              <i className={`devicon-${icon}-plain colored`}></i>
            </div>
            <div className="skill-info">
              <h2>{name}</h2>
              <p>{level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};


export default Skills;