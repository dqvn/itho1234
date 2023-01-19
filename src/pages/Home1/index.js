import React from "react";

import {
  Img,
  Text,
  SelectBox,
  Button,
  Line,
  Stack,
  List,
  Grid,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter gap-[54px] items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="flex flex-row items-center justify-center p-[22px] sm:px-[20px] w-[100%]">
            <div className="header-row ">
              <div className="flex flex-row gap-[12px] items-center justify-center md:pl-[20px] md:pr-[20px]">
                <Img
                  src="images/img_location.svg"
                  className="h-[30px] object-cover w-[30px]"
                  alt="location"
                />
                <Text
                  className="common-pointer flex-grow font-inter font-semibold text-colors text-left"
                  as="h4"
                  variant="h4"
                  onClick={() => navigate("/home1")}
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
            <ul className="flex md:flex-col sm:flex-col flex-row gap-[24px] md:hidden sm:hidden items-center justify-start ml-[54px] md:pl-[20px] md:pr-[20px] w-[auto] common-row-list common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[2px]">
                <a
                  href={"javascript:"}
                  className="common-pointer cursor-pointer font-medium text-[16px] text-gray_901 text-left"
                  onClick={() =>
                    navigate("/educatsyshop", { state: { cat: "2" } })
                  }
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
                  className="common-pointer font-medium leading-[normal] text-[16px] text-gray_901 text-left"
                  onClick={() => navigate("/educatsycourses")}
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
            <div className="flex flex-row gap-[10px] sm:hidden items-end justify-center ml-[54px] md:pl-[20px] md:pr-[20px] w-[8%]">
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
              className="common-pointer flex flex-row gap-[10px] sm:hidden items-end justify-center ml-[32px] md:pl-[20px] md:pr-[20px] w-[10%]"
              onClick={() => navigate("/login")}
            >
              <Text
                className="flex-grow font-medium mb-[4px] mt-[7px] text-gray_901 text-left"
                variant="body5"
              >
                My Account
              </Text>
              <Img
                src="images/img_user_30X30.svg"
                className="h-[30px] object-cover w-[30px]"
                alt="user"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[150px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[42px] items-center justify-start max-w-[1317px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[47%]">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[40%] text-[20px] text-center text-deep_orange_400 w-[max-content]"
                size="sm"
                variant="FillWhiteA700"
              >
                Never Stop Learning
              </Button>
              <div className="flex flex-col gap-[30px] items-center justify-start mt-[15px] w-[100%]">
                <Text
                  className="leading-[75.00px] md:leading-[normal] sm:leading-[normal] text-gray_901 text-left"
                  as="h1"
                  variant="h1"
                >
                  Grow up your skills
                  <br />
                  by online courses
                  <br />
                  with Educatsy
                </Text>
                <Text
                  className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left w-[100%]"
                  variant="body5"
                >
                  Educatsy is a Global training provider based across the UK
                  that specializes in accredited and bespoke training courses.
                  We crush the barriers to getting a degree.
                </Text>
              </div>
              <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end mt-[40px] p-[5px] rounded-radius10 w-[100%]">
                <SelectBox
                  className="font-medium leading-[normal] sm:mx-[0] text-[16px] text-gray_700_99 text-left sm:w-[100%] w-[22%]"
                  placeholderClassName="text-gray_700_99"
                  name="Courses One"
                  placeholder="Kindergarten"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_red_300.svg"
                      className="h-[24px] mr-[0] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Line className="bg-bluegray_100 h-[30px] sm:ml-[0] ml-[20px] sm:mt-[0] my-[10px] w-[1px]" />
                <Text
                  className="font-medium sm:ml-[0] ml-[20px] text-gray_700_99 text-left w-[auto]"
                  variant="body5"
                >
                  Class/Course
                </Text>
                <Button
                  className="flex items-center justify-center min-w-[24%] ml-[167px] sm:ml-[0] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_search.svg"
                      className="mr-[5px] text-center"
                      alt="search"
                    />
                  }
                  size="md"
                >
                  <div className="bg-transparent cursor-pointer font-medium min-w-[24%] text-[16px] text-left text-white_A700 w-[max-content]">
                    Search
                  </div>
                </Button>
              </div>
            </div>
            <Img
              src="images/img_image.png"
              className="h-[699px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[51%]"
              alt="image"
            />
          </div>
          <Stack className="font-airbnbcerealapp h-[1120px] max-w-[1098px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative w-[100%]">
            <Stack className="absolute h-[465px] right-[0] top-[0] md:w-[100%] sm:w-[100%] w-[90%]">
              <div className="absolute flex flex-col items-center justify-start left-[0] rounded-radius10 top-[0] w-[86%]">
                <Text
                  className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] mx-[auto] text-center text-gray_901"
                  as="h2"
                  variant="h2"
                >
                  High quality video, audio
                  <br />& live classes
                </Text>
                <Text
                  className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[20px] mx-[auto] not-italic text-center text-gray_700"
                  variant="body5"
                >
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video
                  image with considerably more than
                  <br />
                  480 vertical scan lines or 576 vertical lines is considered
                  high-definition.
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-inter font-medium min-w-[20%] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                  onClick={() => navigate("/educatsycourses")}
                  size="xl"
                >
                  Visit Courses
                </Button>
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[19%]">
                <List
                  className="flex flex-col sm:flex-none gap-[6.18px] items-center sm:self-stretch w-[100%]"
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
            </Stack>
            <div className="absolute bottom-[0] flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[60px] inset-x-[0] items-center justify-start mx-[auto] w-[97%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[30px] sm:px-[20px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[95%]"
                style={{ backgroundImage: "url('images/img_group7626.png')" }}
              >
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[265px] md:w-[100%] sm:w-[100%] w-[96%]">
                  <Img
                    src="images/img_portraitlittle.png"
                    className="h-[215px] sm:h-[auto] object-cover rounded-radius16 md:w-[100%] sm:w-[100%] w-[23%]"
                    alt="portraitlittle"
                  />
                  <Button
                    className="flex h-[60px] items-center justify-center mb-[20px] md:ml-[0] sm:ml-[0] ml-[234px] md:mt-[0] sm:mt-[0] mt-[135px] rounded-radius50 w-[60px]"
                    size="lgIcn"
                    variant="icbFillDeeporange400"
                  >
                    <Img
                      src="images/img_alarm.svg"
                      className="h-[33px] w-[33px]"
                      alt="alarm"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center mb-[20px] md:ml-[0] sm:ml-[0] ml-[342px] md:mt-[0] sm:mt-[0] mt-[135px] rounded-radius50 w-[60px]"
                    size="xlIcn"
                    variant="icbFillRed300"
                  >
                    <Img
                      src="images/img_arrowup_white_A700.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowup"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="flex sm:flex-col sm:flex-none flex-row gap-[30px] justify-center sm:self-stretch w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start p-[15px] rounded-radius10 w-[100%]">
                  <Stack className="bg-red_50 h-[70px] p-[20px] relative rounded-radius10 w-[70px]">
                    <Img
                      src="images/img_volume.svg"
                      className="absolute h-[30px] inset-[0] justify-center m-[auto] object-cover w-[30px]"
                      alt="volume"
                    />
                  </Stack>
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Audio Classes
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start p-[15px] rounded-radius10 w-[100%]">
                  <Stack className="bg-gray_50 h-[70px] p-[20px] relative rounded-radius10 w-[70px]">
                    <Img
                      src="images/img_user_1.svg"
                      className="absolute h-[30px] inset-[0] justify-center m-[auto] object-cover w-[30px]"
                      alt="user One"
                    />
                  </Stack>
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Live Classes
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start p-[15px] rounded-radius10 w-[100%]">
                  <Stack className="bg-cyan_50 h-[70px] p-[20px] relative rounded-radius10 w-[70px]">
                    <Img
                      src="images/img_vector.svg"
                      className="absolute h-[30px] inset-[0] justify-center m-[auto] object-cover w-[30px]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Recorded Class
                  </Text>
                </div>
              </List>
            </div>
          </Stack>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <div className="flex flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[55%]">
              <Text
                className="font-bold font-metropolis text-gray_901 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Qualified lessons for students
              </Text>
              <Text
                className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mx-[auto] not-italic text-center text-gray_700 w-[100%]"
                variant="body5"
              >
                A lesson or class is a structured period of time where learning
                is intended to occur. It involves one or more students being
                taught by a teacher or instructor.
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center mt-[50px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[40%]">
              <Button
                className="cursor-pointer font-medium min-w-[31%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillGray200"
              >
                Kindergarten
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[31%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillOrange200"
              >
                High School
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[31%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="xl"
                variant="FillGray200"
              >
                College
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start mt-[45px] w-[100%]">
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
                    Standard 3 of the Aged Care Quality Standards applies to all
                    services delivering personal...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-white_A700 w-[max-content]"
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
                    src="images/img_volume_50X50.svg"
                    className="h-[50px] mt-[15px] object-cover w-[50px]"
                    alt="volume One"
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
                    Standard 7 Blood Management mandates that leaders of health
                    service organizations...
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
                    className="cursor-pointer font-medium mb-[15px] min-w-[63%] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="OutlineRed300"
                  >
                    Class Details
                  </Button>
                </div>
              </Grid>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium min-w-[16%] mt-[60px] text-[16px] text-center text-white_A700 w-[max-content]"
              onClick={() => navigate("/educatsycourses")}
              size="xl"
            >
              Visit More Classes
            </Button>
          </div>
          <div className="bg-red_51 flex flex-col font-inter items-end justify-start max-w-[1280px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] pl-[38px] md:pr-[20px] sm:pr-[20px] py-[38px] rounded-radius20 w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[21px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[98%]">
              <div className="flex flex-col items-start justify-start rounded-radius10 md:w-[100%] sm:w-[100%] w-[42%]">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[34%] text-[20px] text-center text-white_A700 w-[max-content]"
                  size="sm"
                  variant="FillBlack900"
                >
                  College Level
                </Button>
                <div className="flex flex-col gap-[20px] items-start justify-start mt-[15px] w-[100%]">
                  <Text
                    className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] text-gray_901 text-left"
                    as="h2"
                    variant="h2"
                  >
                    Don’t waste time in
                    <br />
                    COVID-19 pandemic.
                    <br />
                    Develop your skills.
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left"
                    variant="body5"
                  >
                    High-definition video is video of higher resolution and
                    quality than standard-definition. While there is no
                    standardized
                    <br />
                    meaning for high-definition, generally any video.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[37%] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                  size="xl"
                >
                  Register Now
                </Button>
              </div>
              <Img
                src="images/img_group7647.png"
                className="h-[591px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[57%]"
                alt="group7647"
              />
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row font-inter md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start max-w-[1090px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Img
              src="images/img_image_521X510.png"
              className="h-[521px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[47%]"
              alt="Image Two"
            />
            <div className="flex flex-col gap-[40px] items-start justify-start rounded-radius10 md:w-[100%] sm:w-[100%] w-[46%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] text-gray_901 text-left"
                  as="h2"
                  variant="h2"
                >
                  Want to share your
                  <br />
                  knowledge? Join us
                  <br />a Mentor
                </Text>
                <Text
                  className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left w-[100%]"
                  variant="body5"
                >
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[41%] text-[16px] text-center text-white_A700 w-[max-content]"
                onClick={() => navigate("/educatsyjoinasteacher")}
                size="xl"
              >
                Career Information
              </Button>
            </div>
          </div>
          <div className="bg-black_902 flex flex-col font-metropolis items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] p-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] rounded-radius20 w-[100%]">
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
                  alt="Ellipse170"
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
                      20k+ students daily learn with Educatsy. Subscribe for new
                      courses.
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
              <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[16%] common-column-list common-column-list">
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
                    src="images/img_social.svg"
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
                <ul className="flex flex-col gap-[17px] items-start justify-start w-[100%] common-column-list common-column-list">
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
                <ul className="flex flex-col gap-[17px] items-start justify-start w-[100%] common-column-list common-column-list">
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
                <ul className="flex flex-col gap-[17px] items-start justify-start md:w-[100%] sm:w-[100%] w-[99%] common-column-list common-column-list">
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
                <ul className="flex flex-col gap-[17px] items-start justify-start w-[100%] common-column-list common-column-list">
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
    </>
  );
};

export default Home1Page;
