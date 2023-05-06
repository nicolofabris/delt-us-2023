type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="md:mt:0 mt-16 basis-1/2">
          <img alt="logo" src="logbo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            in mollitia, corporis labore sunt autem molestias provident, alias
            nam dolorem natus ad ipsum blanditiis accusantium dolore aspernatur
            placeat tempore facere!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
