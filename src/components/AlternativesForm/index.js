import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected='true'] {
      background-color: #bebebe;

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 0.5;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
