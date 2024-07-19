import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  flex-wrap: wrap;
`
const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
  flex: 1;
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  font-weight: bold;
  border-radius: 8px;

  color: ${({ theme }) => theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`
