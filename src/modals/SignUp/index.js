import React from "react";
import ModalProvider from "react-modal";

import {
  Stack,
  Slider,
  Img,
  Text,
  Line,
  Button,
  Input,
  CheckBox,
  PagerIndicator,
} from "components";
import { useNavigate } from "react-router-dom";

const SignUpModal = (props) => {
  const navigate = useNavigate();

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[74%]"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Stack className="h-[800px] max-w-[1060px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={1}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="m-[auto] w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[79px] sm:px-[20px] md:px-[40px] rounded-radius15">
                    <div className="flex flex-col items-start justify-start pb-[47px] md:w-[100%] sm:w-[100%] w-[40%]">
                      <div className="flex flex-row font-inter gap-[9px] items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[22px] object-cover w-[22px]"
                          alt="location"
                        />
                        <Text
                          className="flex-grow text-black_900 text-left"
                          variant="body1"
                        >
                          Educatsy
                        </Text>
                      </div>
                      <Text
                        className="font-metropolis leading-[50.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] text-black_900 text-left"
                        as="h3"
                        variant="h3"
                      >
                        Welcome to
                        <br />
                        Educatsy Online
                        <br />
                        Learning Platform
                      </Text>
                      <Img
                        src="images/img_group_322X325.svg"
                        className="h-[322px] md:ml-[0] sm:ml-[0] ml-[2px] mt-[36px] object-cover w-[92%]"
                        alt="Group"
                      />
                    </div>
                    <Line className="bg-gradient  h-[641px] md:ml-[0] sm:ml-[0] ml-[87px] w-[1px]" />
                    <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[80px] pb-[5px] md:w-[100%] sm:w-[100%] w-[42%]">
                      <Button
                        className="flex items-center justify-center min-w-[92%] text-center w-[max-content]"
                        leftIcon={
                          <div className="h-[40px] mr-[8px] w-[40px] bg-red_600 text-center p-[8px] rounded-radius7 flex justify-center items-center">
                            <Img
                              src="images/img_google.svg"
                              className="text-center"
                              alt="google"
                            />
                          </div>
                        }
                        size="md"
                        variant="OutlineGray300"
                      >
                        <div className="bg-transparent cursor-pointer font-normal min-w-[92%] not-italic text-[16px] text-gray_700 text-left w-[max-content]">
                          Signup with google
                        </div>
                      </Button>
                      <div className="flex flex-row gap-[10px] items-start justify-center mt-[28px] md:w-[100%] sm:w-[100%] w-[69%]">
                        <div className="bg-gray_700 h-[1px] my-[7px] w-[8%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_700 text-left w-[auto]"
                          variant="body5"
                        >
                          Or signup with your email
                        </Text>
                        <div className="bg-gray_700 h-[1px] my-[7px] w-[8%]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[25px] w-[100%]">
                        <div className="flex flex-col items-center justify-start pt-[7px] w-[100%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body5"
                            >
                              Full name
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                              wrapClassName="flex w-[100%]"
                              name="Group7608"
                              placeholder="Esther Howard"
                              prefix={
                                <Img
                                  src="images/img_user.svg"
                                  className="mr-[15px] my-[auto]"
                                  alt="user"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="OutlineGray300"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-[11px] items-start justify-start mt-[27px] w-[100%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body5"
                            >
                              Email
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                              wrapClassName="flex w-[100%]"
                              name="email One"
                              placeholder="bill.sanders@example.com"
                              prefix={
                                <Img
                                  src="images/img_message_24_outline.svg"
                                  className="mr-[15px] my-[auto]"
                                  alt="message / 24 / Outline"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="OutlineGray300"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-[11px] items-start justify-start mt-[27px] w-[100%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body5"
                            >
                              Password
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                              wrapClassName="flex w-[100%]"
                              name="password One"
                              placeholder="*************"
                              prefix={
                                <Img
                                  src="images/img_lock.svg"
                                  className="mr-[15px] my-[auto]"
                                  alt="lock"
                                />
                              }
                              suffix={
                                <Img
                                  src="images/img_eye.svg"
                                  className="ml-[35px] my-[auto]"
                                  alt="eye"
                                />
                              }
                              shape="RoundedBorder10"
                              size="md"
                              variant="OutlineGray300"
                            ></Input>
                          </div>
                        </div>
                        <CheckBox
                          className="font-medium mt-[23px] text-[16px] text-gray_700 text-left"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="Iagreedtothe"
                          label="I agreed to the Terms & Conditions"
                        ></CheckBox>
                        <Button
                          className="common-pointer cursor-pointer font-medium mt-[28px] text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/home1")}
                          size="lg"
                        >
                          Sign Up
                        </Button>
                        <div className="flex flex-row gap-[4px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[70px] mt-[33px] md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_700 text-left w-[auto]"
                            variant="body5"
                          >
                            Already have account?
                          </Text>
                          <Text
                            className="common-pointer font-medium text-left text-red_300 w-[auto]"
                            variant="body5"
                            onClick={() => navigate("/login")}
                          >
                            Sign in
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-radius50 h-[10px] border-red_300 border border-solid bg-white_A700 w-[10px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-radius50 h-[8px] bg-deep_orange_400_7f w-[8px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[13%] flex h-[10px] left-[23%] w-[36px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 h-[10px] border-red_300 border border-solid bg-white_A700 w-[10px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-radius50 h-[8px] bg-deep_orange_400_7f w-[8px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[2.50px]"
              unselectedWrapperCss="inline-block mx-[2.50px]"
            />
          </Stack>
        </div>
      </ModalProvider>
    </>
  );
};

export default SignUpModal;
