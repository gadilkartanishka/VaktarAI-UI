export default function TeamSection() {
  const team = [
    { name: "Member 1", role: "AI Engineer" },
    { name: "Member 2", role: "Frontend Developer" },
    { name: "Member 3", role: "Backend Developer" },
    { name: "Member 4", role: "UI/UX Designer" },
    { name: "Member 5", role: "ML Engineer" },
    { name: "Member 6", role: "Product Strategist" },
  ];

  return (
    <>
      <style>{`
        .team {
          min-height: 100vh;
          background: #F3F4F4;
          padding: 100px 60px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 60px;
        }

        .team-heading {
          font-size: 40px;
          font-family: 'Cormorant Garamond', serif;
          color: #061E29;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
        }

        .member {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;

          transition: transform 0.3s ease;
        }

        .member:hover {
          transform: translateY(-6px);
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;

          background: #5F9598; /* placeholder */
          
          display: flex;
          align-items: center;
          justify-content: center;

          color: #061E29;
          font-weight: 600;
        }

        .name {
          font-weight: 600;
          color: #061E29;
        }

        .role {
          font-size: 13px;
          color: #1D546D;
        }

        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

<section id="people" className="team">        <h2 className="team-heading">Meet the Team</h2>

        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="member">
              <div className="avatar">
                {member.name.split(" ")[1] || i + 1}
              </div>

              <div className="name">{member.name}</div>
              <div className="role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}