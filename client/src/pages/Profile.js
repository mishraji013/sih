import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUser, 
  FiMail, 
  FiEdit3, 
  FiSave, 
  FiX,
  FiAward,
  FiTrendingUp,
  FiBookOpen,
  FiClock,
  FiTarget
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    skills: user?.skills || []
  });
  const [newSkill, setNewSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    enrolledCourses: 5,
    completedCourses: 2,
    certificatesEarned: 2,
    hoursLearned: 45,
    currentStreak: 7,
    longestStreak: 15
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    setLoading(true);
    const result = await updateProfile(formData);
    if (result.success) {
      setIsEditing(false);
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      bio: user?.bio || '',
      skills: user?.skills || []
    });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addSkill();
    }
  };

  return (
    <div className="profile">
      <div className="container">
        <motion.div 
          className="profile-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-hero">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <img 
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=667eea&color=fff&size=120`}
                  alt={user?.name}
                />
                {isEditing && (
                  <button className="avatar-edit">
                    <FiEdit3 />
                  </button>
                )}
              </div>
              <div className="profile-info">
                <h1 className="profile-name">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="profile-input"
                    />
                  ) : (
                    user?.name
                  )}
                </h1>
                <p className="profile-email">{user?.email}</p>
                <div className="profile-role">
                  <span className="role-badge">{user?.role}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              {isEditing ? (
                <div className="edit-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    <FiSave />
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={handleCancel}
                  >
                    <FiX />
                    Cancel
                  </button>
                </div>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  <FiEdit3 />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="profile-content">
          <div className="profile-main">
            <motion.div 
              className="profile-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="section-title">About Me</h2>
              <div className="bio-section">
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    className="bio-textarea"
                    rows={4}
                  />
                ) : (
                  <p className="bio-text">
                    {user?.bio || 'No bio available. Click edit to add one.'}
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div 
              className="profile-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="section-title">Skills</h2>
              <div className="skills-section">
                {isEditing ? (
                  <div className="skills-editor">
                    <div className="skills-list">
                      {formData.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                          <button 
                            className="skill-remove"
                            onClick={() => removeSkill(skill)}
                          >
                            <FiX />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="skill-input-group">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a skill..."
                        className="skill-input"
                      />
                      <button 
                        className="skill-add-btn"
                        onClick={addSkill}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="skills-display">
                    {user?.skills?.length > 0 ? (
                      user.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))
                    ) : (
                      <p className="no-skills">No skills added yet</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div 
              className="profile-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="section-title">Learning Statistics</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FiBookOpen />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.enrolledCourses}</div>
                    <div className="stat-label">Enrolled Courses</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <FiAward />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.certificatesEarned}</div>
                    <div className="stat-label">Certificates</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <FiClock />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.hoursLearned}</div>
                    <div className="stat-label">Hours Learned</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <FiTrendingUp />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.currentStreak}</div>
                    <div className="stat-label">Current Streak</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="profile-sidebar">
            <motion.div 
              className="sidebar-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="sidebar-title">Achievements</h3>
              <div className="achievements">
                <div className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-content">
                    <h4>First Course Completed</h4>
                    <p>Completed your first course</p>
                  </div>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">🔥</div>
                  <div className="achievement-content">
                    <h4>7-Day Streak</h4>
                    <p>Learned for 7 days in a row</p>
                  </div>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">📚</div>
                  <div className="achievement-content">
                    <h4>Knowledge Seeker</h4>
                    <p>Enrolled in 5+ courses</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="sidebar-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="sidebar-title">Learning Goals</h3>
              <div className="goals">
                <div className="goal-item">
                  <div className="goal-progress">
                    <div className="goal-bar">
                      <div className="goal-fill" style={{ width: '60%' }} />
                    </div>
                    <span className="goal-percentage">60%</span>
                  </div>
                  <div className="goal-content">
                    <h4>Complete Web Development</h4>
                    <p>Finish all web dev courses</p>
                  </div>
                </div>
                
                <div className="goal-item">
                  <div className="goal-progress">
                    <div className="goal-bar">
                      <div className="goal-fill" style={{ width: '30%' }} />
                    </div>
                    <span className="goal-percentage">30%</span>
                  </div>
                  <div className="goal-content">
                    <h4>Learn Python</h4>
                    <p>Master Python programming</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;