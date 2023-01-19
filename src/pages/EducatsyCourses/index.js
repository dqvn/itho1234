import React from "react";

import {
  Img,
  Text,
  SelectBox,
  Stack,
  List,
  Button,
  Grid,
  Input,
  Slider,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const EducatsyCoursesPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center max-w-[1280px] ml-[auto] mr-[auto] mx-[auto] my-[22px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <div className="header-row ">
                <div className="flex flex-row gap-[12px] items-center justify-start">
                  <Img
                    src="images/img_location.svg"
                    className="h-[30px] object-cover w-[30px]"
                    alt="location"
                  />
                  <Text
                    className="flex-grow font-semibold text-black_900 text-left"
                    as="h4"
                    variant="h4"
                  >
                    Educatsy
                  </Text>
                </div>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <ul className="flex md:flex-col sm:flex-col flex-row gap-[24px] md:hidden sm:hidden items-center justify-start md:ml-[0] ml-[54px] w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[2px]">
                  <a
                    href={"javascript:"}
                    className="common-pointer cursor-pointer font-medium text-[16px] text-gray_901 text-left"
                    onClick={() => navigate("/educatsyshop")}
                    rel="noreferrer"
                  >
                    Shop
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[22%]">
                  <SelectBox
                    className="font-medium leading-[normal] text-[16px] text-gray_901 text-left"
                    placeholderClassName="text-gray_901"
                    name="forkindergarten"
                    placeholder="For Kindergarten"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_901.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[21%]">
                  <SelectBox
                    className="font-medium leading-[normal] text-[16px] text-gray_901 text-left"
                    placeholderClassName="text-gray_901"
                    name="forhighschool"
                    placeholder="For High School"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_901.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[16%]">
                  <SelectBox
                    className="font-medium leading-[normal] text-[16px] text-gray_901 text-left"
                    placeholderClassName="text-gray_901"
                    name="forcollege"
                    placeholder="For College"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_901.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[13%]">
                  <SelectBox
                    className="font-medium leading-[normal] text-[16px] text-gray_901 text-left"
                    placeholderClassName="text-gray_901"
                    name="courses"
                    placeholder="Courses"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_901.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[2px]">
                  <a
                    href={"javascript:"}
                    className="common-pointer cursor-pointer font-medium text-[16px] text-gray_901 text-left"
                    onClick={() => navigate("/educatsymentors")}
                    rel="noreferrer"
                  >
                    Mentors
                  </a>
                </li>
              </ul>
              <div className="flex flex-row gap-[10px] sm:hidden items-end justify-center md:ml-[0] ml-[54px] w-[8%]">
                <Text
                  className="flex-grow font-medium mb-[4px] mt-[7px] text-gray_901 text-left"
                  variant="body5"
                >
                  Cart (0)
                </Text>
                <Img
                  src="images/img_bag.svg"
                  className="h-[30px] object-cover w-[30px]"
                  alt="bag"
                />
              </div>
              <div
                className="common-pointer flex flex-row sm:hidden items-end justify-between md:ml-[0] ml-[32px] w-[11%]"
                onClick={() => navigate("/login")}
              >
                <Text
                  className="flex-grow font-medium mb-[4px] mt-[7px] text-gray_901 text-left"
                  variant="body5"
                >
                  My Account
                </Text>
                <Img
                  src="images/img_user_2.svg"
                  className="h-[30px] object-cover w-[30px]"
                  alt="user"
                />
              </div>
            </div>
          </header>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="bg-yellow_100 flex flex-col items-start justify-end max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] p-[17px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius20 w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[13px] mr-[auto] mt-[2px] md:w-[100%] sm:w-[100%] w-[88%]">
                <Text
                  className="font-medium text-black_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Home | Courses
                </Text>
                <Text
                  className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] md:mt-[0] sm:mt-[0] mt-[65px] text-gray_901 text-left"
                  as="h2"
                  variant="h2"
                >
                  Educatsy Courses
                  <br />
                  For All Standards
                </Text>
                <Stack className="font-airbnbcerealapp h-[233px] md:ml-[0] sm:ml-[0] ml-[134px] relative md:w-[100%] sm:w-[100%] w-[40%]">
                  <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                    <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[97px] justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] md:w-[100%] sm:w-[100%] w-[32%]">
                        <List
                          className="flex flex-col sm:flex-none gap-[3.15px] items-center sm:self-stretch w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </div>
                        </List>
                      </div>
                      <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[90.00px] h-[16px] rounded-radius2155 w-[100%]"></div>
                    </div>
                  </div>
                  <Img
                    src="images/img_image_233X416.png"
                    className="absolute h-[233px] inset-[0] justify-center m-[auto] object-cover w-[97%]"
                    alt="Image"
                  />
                </Stack>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-[20px] items-center justify-start max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[40px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius10 w-[100%]">
              <Button
                className="cursor-pointer font-medium min-w-[12%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                All Courses
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                Kindergarten
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] text-[16px] text-center text-white_A700 w-[max-content]"
                size="xl"
                variant="FillOrange200"
              >
                High School
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                College
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[11%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                Computer
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                Science
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                Engineering
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[13%] text-[16px] text-center text-deep_orange_400 w-[max-content]"
                size="xl"
                variant="FillWhiteA700"
              >
                More Courses
              </Button>
            </div>
            <div
              className="common-pointer flex flex-col gap-[24px] items-start justify-start max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]"
              onClick={() => navigate("/educatsycoursesdetails")}
            >
              <Text
                className="font-semibold text-gray_901 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Standard Classes
              </Text>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Grid className="sm:gap-[15px] md:gap-[29px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_download.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="download"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard One
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 1 is a foundation Standard that reflects 7
                      important concepts...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_download_50X50.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="download One"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Two
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 2 builds on the foundations of Standard 1 and
                      includes requirements...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_whatsapp.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="whatsapp"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Three
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 3 of the Aged Care Quality Standards applies to
                      all services delivering personal...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-white_A700 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_rewind.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="rewind"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Four
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 4 of the Aged Care Quality Standards focuses on
                      services and supports...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="music"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Five
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_volume_50X50.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="volume"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Six
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="arrowdown One"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Seven
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 7 Blood Management mandates that leaders of
                      health service organizations...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_info.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="info"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Eight
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 8 Course from NCERT Solutions help students to
                      understand...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_volume_1.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="volume One"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Nine
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_group.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="Group"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      O- Level
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-center p-[15px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-[50px] mt-[15px] object-cover w-[50px]"
                      alt="arrowup"
                    />
                    <Text
                      className="mt-[20px] text-gray_901 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      A- Level
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mx-[0] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={() => navigate("/educatsycoursesdetails")}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </div>
                </Grid>
              </div>
            </div>
            <Text
              className="font-semibold md:ml-[0] sm:ml-[0] ml-[80px] mt-[150px] text-gray_901 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Other Courses For High School
            </Text>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[42px] items-center justify-start max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[14px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-medium gap-[8px] leading-[normal] p-[0] text-[16px] placeholder:text-gray_700_99 text-gray_700_99 text-left w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[66%]"
                name="search"
                placeholder="Search Class, Course"
                suffix={
                  <div className="h-[46px] w-[46px] bg-red_300 p-[11px] rounded-radius8 mx-[11px] flex justify-center items-center">
                    inputvalue?.length>0?{" "}
                    <CloseSVG
                      className="cursor-pointer my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#995d5a6f"
                    />{" "}
                    :
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer my-[auto]"
                      alt="search"
                    />
                  </div>
                }
                shape="srcRoundedBorder10"
                size="smSrc"
                variant="srcFillWhiteA700"
              ></Input>
              <SelectBox
                className="font-medium leading-[normal] sm:mx-[0] text-[16px] text-gray_700_99 text-left sm:w-[100%] w-[32%]"
                placeholderClassName="text-gray_700_99"
                name="Sortby"
                placeholder="Sort by: Latest"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_red_300.svg"
                    className="h-[24px] mr-[15px] w-[24px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder10"
                size="md"
                variant="FillWhiteA700"
              ></SelectBox>
            </div>
            <Stack className="flex h-[879px] justify-end max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[40px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative w-[100%]">
              <div className="flex flex-row items-start justify-start mt-[auto] mx-[auto] sm:px-[20px] md:px-[40px] px-[64px] w-[23%]">
                <Text
                  className="font-medium mt-[14px] text-gray_901 text-left w-[auto]"
                  variant="body5"
                >
                  Page
                </Text>
                <Button
                  className="cursor-pointer font-medium h-[44px] leading-[normal] ml-[16px] text-[18px] text-bluegray_800 text-center w-[44px]"
                  size="sm"
                  variant="FillWhiteA700"
                >
                  5
                </Button>
                <Text
                  className="font-medium ml-[15px] mt-[14px] text-gray_901 text-left w-[auto]"
                  variant="body5"
                >
                  of 13
                </Text>
              </div>
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                  <Slider
                    slidesToShow={10}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-[100%]"
                    items={[...Array(30)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start p-[15px] rounded-radius10">
                          <Img
                            src="images/img_image_103X160.png"
                            className="h-[103px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[28%]"
                            alt="Image Two"
                          />
                          <div className="flex flex-col items-start justify-start mb-[6px] sm:ml-[0] ml-[15px] sm:mt-[0] mt-[9px] md:w-[100%] sm:w-[100%] w-[45%]">
                            <Text
                              className="text-gray_901 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              The Three Musketeers
                            </Text>
                            <Img
                              src="images/img_star_amber_500.svg"
                              className="h-[20px] mt-[10px] object-cover w-[43%]"
                              alt="star"
                            />
                            <Text
                              className="mt-[13px] text-deep_orange_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              $40.00
                            </Text>
                          </div>
                          <Button
                            className="flex h-[44px] items-center justify-center mb-[5px] sm:ml-[0] ml-[104px] sm:mt-[0] mt-[54px] w-[44px]"
                            shape="icbRoundedBorder6"
                            size="mdIcn"
                            variant="icbFillRed53"
                          >
                            <Img
                              src="images/img_bag.svg"
                              className="h-[24px] w-[24px]"
                              alt="bag One"
                            />
                          </Button>
                        </div>
                      </React.Fragment>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                  <div className="flex flex-row gap-[196px] items-center justify-center md:w-[100%] sm:w-[100%] w-[23%]">
                    <Button
                      className="cursor-pointer flex h-[44px] items-center justify-center w-[44px]"
                      onClick={() => sliderRef.current?.slidePrev()}
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowleft"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer flex h-[44px] items-center justify-center w-[44px]"
                      onClick={() => sliderRef.current?.slideNext()}
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbFillRed300"
                    >
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </Stack>
            <div className="bg-black_902 flex flex-col font-metropolis items-center justify-start max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[150px] p-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] rounded-radius20 w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start mb-[15px] mt-[11px] w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                  <Img
                    src="images/img_ellipse169.png"
                    className="h-[60px] sm:h-[auto] rounded-radius50 w-[60px]"
                    alt="Ellipse169"
                  />
                  <Img
                    src="images/img_ellipse170.png"
                    className="h-[60px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[67px] md:mt-[0] sm:mt-[0] mt-[105px] rounded-radius50 w-[60px]"
                    alt="Ellipse170 One"
                  />
                  <div className="flex flex-col justify-start md:ml-[0] sm:ml-[0] ml-[114px] md:w-[100%] sm:w-[100%] w-[74%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                      <Text
                        className="flex-grow font-bold leading-[55.00px] md:leading-[normal] sm:leading-[normal] md:mt-[0] sm:mt-[0] mt-[19px] text-center text-white_A700"
                        as="h2"
                        variant="h2"
                      >
                        Subscribe For Get Update
                        <br />
                        Every New Courses
                      </Text>
                      <Img
                        src="images/img_ellipse166.png"
                        className="h-[60px] sm:h-[auto] rounded-radius50 w-[60px]"
                        alt="Ellipse166"
                      />
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row font-inter gap-[146px] md:gap-[40px] sm:gap-[40px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[30px] md:w-[100%] sm:w-[100%] w-[86%]">
                      <Text
                        className="flex-grow font-normal mt-[28px] not-italic text-left text-white_A700_b2"
                        variant="body5"
                      >
                        20k+ students daily learn with Educatsy. Subscribe for
                        new courses.
                      </Text>
                      <Img
                        src="images/img_ellipse167.png"
                        className="h-[60px] sm:h-[auto] rounded-radius50 w-[60px]"
                        alt="Ellipse167"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                  <Img
                    src="images/img_ellipse171.png"
                    className="h-[60px] sm:h-[auto] md:mt-[0] sm:mt-[0] mt-[15px] rounded-radius50 w-[60px]"
                    alt="Ellipse171"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-center mb-[15px] md:ml-[0] sm:ml-[0] ml-[244px] md:w-[100%] sm:w-[100%] w-[45%]">
                    <Input
                      className="font-medium sm:mx-[0] p-[0] text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                      wrapClassName="md:w-[100%] sm:mx-[0] sm:w-[100%] w-[73%]"
                      type="email"
                      name="email"
                      placeholder="enter your email"
                    ></Input>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[28%] text-[16px] text-center text-white_A700 w-[max-content]"
                      shape="CustomBorderLR10"
                      size="xl"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <Img
                    src="images/img_ellipse168.png"
                    className="h-[60px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[277px] md:mt-[0] sm:mt-[0] mt-[15px] rounded-radius50 w-[60px]"
                    alt="Ellipse168"
                  />
                </div>
              </div>
            </div>
            <footer className="bg-gray_100 flex font-inter w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[1280px] mb-[80px] ml-[auto] mr-[auto] mt-[100px] mx-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
                <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[16%] common-column-list">
                  <li className="w-[92%]">
                    <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-start">
                      <Img
                        src="images/img_location.svg"
                        className="h-[30px] object-cover w-[30px]"
                        alt="location One"
                      />
                      <Text
                        className="flex-grow font-semibold text-black_900 text-left"
                        as="h4"
                        variant="h4"
                      >
                        Educatsy
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[19px] w-[76%]">
                    <Img
                      src="images/img_social_deep_orange_400.svg"
                      className="cursor-pointer h-[36px] object-cover"
                      alt="social"
                    />
                  </li>
                  <li className="mt-[40px] w-[100%]">
                    <div className="cursor-pointer flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_700 text-left w-[auto]"
                        variant="body5"
                      >
                        ©2021 Educatsy.co
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left"
                        variant="body5"
                      >
                        Educatsy is a registered
                        <br />
                        trademark of Educatsy.co
                      </Text>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[16%]">
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    variant="body2"
                  >
                    Courses
                  </Text>
                  <ul className="flex flex-col gap-[17px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-gray_700 text-left"
                        variant="body5"
                      >
                        Classroom courses
                      </Text>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Virtual classroom courses
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        E-learning courses
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Video Courses
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Offline Courses
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-center justify-start w-[10%] md:w-[100%] sm:w-[100%]">
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    variant="body2"
                  >
                    Community
                  </Text>
                  <ul className="flex flex-col gap-[17px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-gray_700 text-left"
                        variant="body5"
                      >
                        Learners
                      </Text>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Partners
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Developers
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Transactions
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Teaching Center
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[14%]">
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    variant="body2"
                  >
                    Quick links
                  </Text>
                  <ul className="flex flex-col gap-[17px] items-start justify-start md:w-[100%] sm:w-[100%] w-[99%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-gray_700 text-left"
                        variant="body5"
                      >
                        Home
                      </Text>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Professional Education
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Courses
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Admissions
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Testimonial
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Programs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[6%]">
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    variant="body2"
                  >
                    More
                  </Text>
                  <ul className="flex flex-col gap-[17px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-gray_700 text-left"
                        variant="body5"
                      >
                        Press
                      </Text>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Investors
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Terms
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Help
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_700 text-left"
                        rel="noreferrer"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducatsyCoursesPage;
