import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
    justify-content: center;
    align-items: center;
  `}
`;

export const ImageApresentation = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.textHeading};
    font-size: 40px;
    width: 300px;
    text-align: center;
    margin-top: 20px;
    line-height: 39px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.textBody};
    font-size: 15px;
    width: 300px;
    text-align: center;
    margin-top: 10px;
    line-height: 16px;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    margin-top: 20px;
    line-height: 16px;
    width: 274px;
    height: 56px;
    border-radius: 8px;
  `}
`;
