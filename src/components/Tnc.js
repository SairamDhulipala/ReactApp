import React, { useEffect, useState } from 'react';
import './Tnc.css';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Tnc = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { mdFile } = useParams();
  const navigate = useNavigate();
  const agreementName = getAgreementName(mdFile);

  useEffect(() => {
    let markdownFile;
    if (mdFile === 'a') {
      markdownFile = '/a.md';
    } else if (mdFile === 'b') {
      markdownFile = '/b.md';
    } else if (mdFile === 'c') {
      markdownFile = '/c.md';
    }

    if (markdownFile) {
      fetch(markdownFile)
        .then((response) => response.text())
        .then((markdown) => {
          setMarkdownContent(markdown);
        })
        .catch((error) => {
          console.log('Error fetching Markdown file:', error);
        });
    }
  }, [mdFile]);

  const handleAccept = () => {
    if (accepted) {
      alert(`The agreement for ${agreementName} has been accepted.`);
      navigate('/welcome'); // Redirect to WelcomePage.js
    }
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function getAgreementName(file) {
    switch (file) {
      case 'a':
        return 'IBM';
      case 'b':
        return 'Amazon';
      case 'c':
        return 'Apple';
      default:
        return '';
    }
  }

  return (
    <div>
      <h1 className="title">Terms and conditions - {agreementName}</h1>
      <ReactMarkdown className="markdown">{markdownContent}</ReactMarkdown>

      <div className="button-alignment">
        <div className="checkbox-container">
          <label htmlFor="acceptCheckbox">
            <input
              type="checkbox"
              id="acceptCheckbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            Check the box to accept the T&C
          </label>
        </div>
        <div className="button-container">
          <button id="acceptButton" onClick={handleAccept} disabled={!accepted}>
            Accept T&C
          </button>
          <button id="goToTopButton" onClick={handleGoToTop}>
            Go to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tnc;