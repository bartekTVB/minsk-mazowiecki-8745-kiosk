import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledIcon } from './Button.style';

function Button(props) {
  const { baseUrl, label, url, iconNumber, setLoader } = props;
  const navigate = useNavigate();

  const handleRedirect = () => {
    const regexTest = /^(.\/|\/|\.\.\/)?pdf/;
    const regexTrim = /^[/./]+|[/./]+$/g;

    if (url.startsWith("http")) {
      setLoader(true);
      window.location.href = url;
    } else if (regexTest.test(url)) {
      setLoader(true);

      const trimmedBaseUrl = baseUrl.replace(regexTrim, '');
      const trimmedUrl = url.replace(regexTrim, '');

      window.location.href = trimmedBaseUrl + '/' + trimmedUrl;
    } else {
      navigate(url);
    }
  };

  return (
    <StyledButton
      onClick={handleRedirect}
    >
      <StyledIcon iconNo={iconNumber} />
      <div>
        {
          label.split('\\n').map((n, key) => {
            return <Fragment key={key}>{n}<br /></Fragment>
          })
        }
      </div>
    </StyledButton>
  )
}

export default Button;