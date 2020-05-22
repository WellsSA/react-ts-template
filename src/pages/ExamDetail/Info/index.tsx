import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaRegCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Container, CopyToClipboardContainer } from './styles';

interface IProps {
  title: string | undefined;
  url: string | undefined;
  isLoading: boolean;
}

const Info: React.FC<IProps> = ({ title, url, isLoading }) => {
  return (
    <Container>
      {!isLoading ? (
        <>
          <strong>{title}</strong>
          <CopyToClipboardContainer>
            <span>{url}</span>
            <CopyToClipboard text={url}>
              <FaRegCopy title="Copy to clipboard" />
            </CopyToClipboard>
          </CopyToClipboardContainer>
        </>
      ) : (
        <>
          <Skeleton width={300} height={30} />
          <Skeleton width={320} height={30} />
        </>
      )}
    </Container>
  );
};

export default Info;
