import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'IDURAR'}
      subTitle={translate('')}
      extra={
        <>
          <p>
            Website : <a href="https://paartechnology.com/">www.paartechnology.com</a>{' '}
          </p>
          {/* <p>
            GitHub :{' '}
            <a href="https://paartechnology.com/">
              https://paartechnology.com/
            </a>
          </p> */}
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://paartechnology.com/contact-us/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
