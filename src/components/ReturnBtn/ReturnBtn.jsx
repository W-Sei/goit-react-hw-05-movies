import { ReturnBtn } from './ReturnBtn.styled';

import { useNavigate } from 'react-router-dom';
export default function GoBackButton({ location }) {
  const navigate = useNavigate();
  return (
    <ReturnBtn
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      Return
    </ReturnBtn>
  );
}