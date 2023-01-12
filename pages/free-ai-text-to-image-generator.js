import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/imageGen.module.css";
import Image from "next/image";

function ImageGen() {
  const inputRef = useRef();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();
  const [screenSize, setScreenSize] = useState();
  const [showStyles, setStyles] = useState({
    display: "flex",
    flexDirection: "column",
  });

  const [headStyle, setheadStyle] = useState({
    fontSize: 20,
  });

  const [borders, setBorder] = useState({
    input: true,
    select: true,
    button: true,
  });
  const [inputStyle, setInputstyle] = useState({
    display: "flex",
    width: "100%",
    padding: "20px 30px",
    margin: "8px 0",
    boxSizing: "border-box",
    border: borders.input ? `2px solid blue` : `none`,
  });

  const [buttonStyle, setButtonStyle] = useState({
    display: "flex",
    width: "100%",
    padding: "20px 30px",
    margin: "8px 0",
    boxSizing: "border-box",
    border: borders.button ? `2px solid blue` : `none`,
  });

  const [selection, setSelect] = useState({
    display: "flex",
    width: "100%",
    padding: "20px 30px",
    margin: "8px 0",
    boxSizing: "border-box",
    border: borders.select ? `2px solid blue` : `none`,
  });

  const [pars, setPars] = useState({
    display: "flex",
    flexDirection: "column",
  });

  const [paragraphs, setParagraphs] = useState({
    textAlign: "center",
    margin: "10px",
  });

  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({
    input: "",
    select: "",
  });
  const [image, setImage] = useState({});

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  const handlePrompt = (e) => {
    inputs.input = e.target.value;
  };

  const handleSelect = (e) => {
    inputs.select = e.target.value;
  };

  const focus = () => {
    inputRef.current.focus();
    setLoading(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/generate", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ InputsData: inputs }),
    })
      .then((res) => res.json())
      .then((data) => setImage(data?.imgUrl?.url))
      .then(() => setLoading(false))
      .then(() =>
        setBorder({ ...borders, input: false, select: true, button: true })
      )
      .then(() => setShow(true));
  };
  console.log(image);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formStyle}>
            <h1
              className={styles.heading}
              style={screenSize < 780 ? headStyle : {}}
            >
              AI Text to Image{" "}
              <span className={styles.span}>
                <span>&nbsp;</span> Generator
              </span>
            </h1>
            <div
              className={styles.formElement}
              style={screenSize < 780 ? showStyles : {}}
            >
              <input
                onClick={() => setBorder(false)}
                placeholder="Enter text here..."
                className={styles.input}
                style={screenSize < 780 ? inputStyle : {}}
                required
                type="text"
                onChange={handlePrompt}
                ref={inputRef}
              ></input>

              <select
                id="sizes"
                required
                name="size"
                onChange={handleSelect}
                className={styles.select}
                style={screenSize < 789 ? selection : {}}
              >
                <option value="256x256">Size</option>
                <option value="256x256">Small</option>
                <option value="512x512">Medium</option>
                <option value="1024x1024">Large</option>
              </select>

              <button
                className={styles.button}
                type="submit"
                onClick={focus}
                style={screenSize < 780 ? buttonStyle : {}}
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className={styles.formElement}>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <div>
              {show ? (
                <>
                  {" "}
                  {image ? (
                    <div>
                      <img
                        style={{ marginTop: "30px" }}
                        src={image}
                        alt="generate image"
                      ></img>
                    </div>
                  ) : (
                    <div>
                      <h3>Image could not be generated</h3>
                    </div>
                  )}{" "}
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className={styles.bodys} style={screenSize < 780 ? pars : {}}>
          <div className={styles.imageGen}>
            <h1 className={styles.heads}>What is AI Image Generator</h1>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              An AI image generator is a type of artificial intelligence
              software that is able to generate new images based on a given set
              of instructions or training data.
            </p>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              This can be done using a variety of techniques, such as deep
              learning, neural networks, and generative adversarial networks
              (GANs). The generated images can be used for a variety of
              purposes, including creating original artwork, augmenting existing
              images, and improving image recognition systems.
            </p>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              Some AI image generators are able to create highly realistic
              images that are almost indistinguishable from real-world photos,
              while others produce more stylized or abstract output.
            </p>
          </div>

          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>Best Text to Image AI</h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="ai"
              ></Image>
            </div>
          </div>

          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>Get Free Images</h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="text to image"
              ></Image>
            </div>
          </div>

          <div className={styles.imageGen}>
            <h1 className={styles.heads}>
              Get AI image Generated for you Online
            </h1>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              This is a free tool to use. Use it to get ai generated images
              easily. Just enter the text and boom! the image will get generated
              for you for free.
            </p>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              One thing to note is that youb have to use appropriate descrition.
              Inapproriate scenes will not be shown. Instead, you will be
              notified that the image could not be generated.
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              Otherwise, the tool is easy to use. Just text and there you will
              have it, the software to work for you
            </p>
          </div>

          <div className={styles.imageGen}>
            <h1 className={styles.heads}>AI Image Generator Online</h1>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              You get any kind of image you might ever think of. Its simple. In
              a few, second, you will have the right image for you.
            </p>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              A simple text can only get you far. Click can always change and
              tweak the description to meet your specific desciription
            </p>
          </div>
          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>Best AI Image Generator</h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="images"
              ></Image>
            </div>
          </div>

          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>Online image tool</h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="text-image-converter"
              ></Image>
            </div>
          </div>

          <div className={styles.imageGen}>
            <h1 className={styles.heads}>AI Generator Text</h1>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              You will be able to get high qulality images in just a click of a
              button.
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              Allow the power of AI to work for you again and again. It is a
              reliable software that allows you to get fresh image content
              whenever you want
            </p>
          </div>
          <div className={styles.imageGen}>
            <h1 className={styles.heads}>
              What is the best free AI art generator
            </h1>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              The best image is generated for you basing on your input text.
            </p>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              The text to image converter works for you in the background. Only
              english words are supported for now. You can never go out of ideas
              on what you can do with the software.
            </p>
          </div>

          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>Text Image Converter</h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="images convert"
              ></Image>
            </div>
          </div>
          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>Online text to image tool</h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="image creation"
              ></Image>
            </div>
          </div>

          <div className={styles.imageGen}>
            <h1 className={styles.heads}>Is there a free AI image generator</h1>
            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              The software is free and will always be free. Use it to your
              advantage without any worry of subscriptions.
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              Additional features will be added shortly. Incase of any feedback,
              kindly let me know below. I Will highly appreciate.
            </p>
          </div>

          <div className={styles.imageGen}>
            <h1 className={styles.heads}>Examples of AI image generator</h1>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              {" "}
              There are several AI image generators available online that can
              generate images from scratch or modify existing images using
              machine learning algorithms. Here are a few examples:
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              1) DALL-E: This is a deep learning AI created by OpenAI that can
              generate images from textual descriptions, such as a two-story
              pink house with a white fence and a red door. You can try it out
              at https://dall-e.openai.com/.
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              2) Deep Dream: This is a deep learning AI developed by Google that
              can generate dream-like images by identifying and enhancing
              patterns in images. You can try it out at
              https://deepdreamgenerator.com/.
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              3) Prisma: This is a mobile app and online platform that uses AI
              to apply artistic styles to images. You can try it out at
              https://prisma-ai.com/.
            </p>

            <p
              style={screenSize < 700 ? paragraphs : {}}
              className={styles.words}
            >
              4) AI Portrait Generator: This is an online tool that uses AI to
              generate portraits in the style of various famous artists. You can
              try it out at https://www.aiportraiture.com/.
            </p>
          </div>

          <div className={`${styles.imageGen} ${styles.center}`}>
            <div className={styles.images}>
              <h1 className={styles.heads}>
                What is the best AI image generator
              </h1>
              <Image
                src="/images/image.png"
                width="300"
                height="300"
                alt="create images"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGen;
