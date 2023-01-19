import React from "react";

import { Img, Text, SelectBox, Button, List, Grid, Input } from "components";
import { useNavigate } from "react-router-dom";

const EducatsyCoursesDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
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
              <ul className="flex md:flex-col sm:flex-col flex-row gap-[24px] md:hidden sm:hidden items-center justify-start ml-[54px] md:pl-[20px] md:pr-[20px] w-[auto] common-row-list">
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
                  src="images/img_user_2.svg"
                  className="h-[30px] object-cover w-[30px]"
                  alt="user"
                />
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-gray_201 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[68px] items-start justify-start max-w-[1280px] ml-[auto] mr-[auto] p-[25px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] rounded-radius20 w-[100%]">
              <div className="flex flex-col gap-[30px] items-start justify-start my-[4px] md:w-[100%] sm:w-[100%] w-[63%]">
                <Text
                  className="font-medium text-black_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Home | Courses | Course Details
                </Text>
                <div className="flex flex-col gap-[29px] items-start justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[197px] sm:px-[20px] md:px-[40px] rounded-radius20 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group7667.png')",
                    }}
                  >
                    <Button
                      className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                      size="2xlIcn"
                      variant="icbFillRed300"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[16px] w-[16px]"
                        alt="play"
                      />
                    </Button>
                  </div>
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Maths - for Standard 3 Students | Episode 2
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                <Text
                  className="text-black_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Course Playlists
                </Text>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <List
                    className="flex flex-col sm:flex-none gap-[16px] items-center sm:self-stretch w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 hover:cursor-pointer flex flex-row gap-[10px] items-center justify-start hover:my-[0] my-[0] p-[10px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_image_50X80.png"
                        className="h-[50px] sm:h-[auto] object-cover rounded-radius5 w-[23%]"
                        alt="Image"
                      />
                      <div className="flex flex-col items-start justify-start w-[50%]">
                        <Text
                          className="font-semibold text-black_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Maths - Introduction
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400 text-left w-[auto]"
                          variant="body6"
                        >
                          1:57
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 hover:cursor-pointer flex flex-row gap-[10px] items-center justify-start hover:my-[0] my-[0] p-[10px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_image_50X80.png"
                        className="h-[50px] sm:h-[auto] object-cover rounded-radius5 w-[23%]"
                        alt="Image One"
                      />
                      <div className="flex flex-col items-start justify-start w-[64%]">
                        <Text
                          className="font-semibold text-black_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400 text-left w-[auto]"
                          variant="body6"
                        >
                          5:43
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_87 hover:cursor-pointer flex flex-row gap-[10px] items-center justify-start hover:my-[0] my-[0] p-[10px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[16px] rounded-radius5 w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex h-[18px] items-center justify-center rounded-radius50 w-[18px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] w-[10px]"
                            alt="lock"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 text-left w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 text-left w-[auto]"
                          variant="body6"
                        >
                          8:11
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_87 hover:cursor-pointer flex flex-row gap-[10px] items-center justify-start hover:my-[0] my-[0] p-[10px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[16px] rounded-radius5 w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex h-[18px] items-center justify-center rounded-radius50 w-[18px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] w-[10px]"
                            alt="lock One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 text-left w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 text-left w-[auto]"
                          variant="body6"
                        >
                          6:10
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_87 hover:cursor-pointer flex flex-row gap-[10px] items-center justify-start hover:my-[0] my-[0] p-[10px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[16px] rounded-radius5 w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex h-[18px] items-center justify-center rounded-radius50 w-[18px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] w-[10px]"
                            alt="lock Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 text-left w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 text-left w-[auto]"
                          variant="body6"
                        >
                          10:00
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_87 hover:cursor-pointer flex flex-row gap-[10px] items-center justify-start hover:my-[0] my-[0] p-[10px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[16px] rounded-radius5 w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex h-[18px] items-center justify-center rounded-radius50 w-[18px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] w-[10px]"
                            alt="lock Three"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 text-left w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 text-left w-[auto]"
                          variant="body6"
                        >
                          7:53
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[40px] items-start justify-start max-w-[1280px] ml-[auto] mr-[auto] mt-[70px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <div className="flex flex-col gap-[25px] items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Course Details
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Certification
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Who this course is for
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 text-left w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pb-[5px] md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    What you'll learn in this course:
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mt-[17px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="bg-deep_orange_400 h-[10px] rounded-radius50 w-[10px]"></div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="bg-deep_orange_400 h-[10px] rounded-radius50 w-[10px]"></div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="bg-deep_orange_400 h-[10px] rounded-radius50 w-[10px]"></div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="bg-deep_orange_400 h-[10px] rounded-radius50 w-[10px]"></div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="bg-deep_orange_400 h-[10px] rounded-radius50 w-[10px]"></div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                <div className="bg-white_A700 flex flex-col items-center justify-center p-[20px] rounded-radius10 w-[100%]">
                  <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-deep_orange_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $49.00
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Instructor
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-semibold text-[20px] text-black_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Wade Warren
                    </a>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[21px] w-[100%]">
                    <Text
                      className="flex-grow font-semibold text-gray_700 text-left"
                      variant="body3"
                    >
                      Ratings
                    </Text>
                    <Img
                      src="images/img_mobile.svg"
                      className="h-[16px] mt-[2px] object-cover w-[26%]"
                      alt="mobile"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[21px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Durations
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      10 Days
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[21px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Lessons
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      30
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[21px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Quizzes
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      5
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[21px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Certificate
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Yes
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[21px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Language
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      English
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mb-[6px] mt-[21px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Access
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Lifetime
                    </Text>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-medium text-[18px] text-center text-white_A700 w-[100%]"
                  onClick={() => navigate("/educatsycoursespricing")}
                  shape="RoundedBorder5"
                  size="xl"
                >
                  Purchase Course
                </Button>
              </div>
            </div>
            <div className="flex flex-col font-metropolis gap-[40px] items-start justify-start max-w-[1280px] ml-[auto] mr-[auto] mt-[150px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <Text
                className="font-bold text-gray_901 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Similar Courses
              </Text>
              <div className="flex flex-col font-inter items-center justify-start w-[100%]">
                <Grid className="sm:gap-[15px] md:gap-[29px] gap-[40px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-start p-[15px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                      <Img
                        src="images/img_image_6.png"
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
                        variant="icbFillRed300"
                      >
                        <Img
                          src="images/img_lock_44X44.svg"
                          className="h-[24px] w-[24px]"
                          alt="lock Four"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-start p-[15px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="h-[103px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[28%]"
                        alt="Image Four"
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
                          alt="star One"
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
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-start p-[15px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                      <Img
                        src="images/img_image_5.png"
                        className="h-[103px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[28%]"
                        alt="Image Six"
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
                          alt="star Two"
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
                          alt="bag Two"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-col items-center justify-start p-[15px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="h-[103px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[28%]"
                        alt="Image Eight"
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
                          alt="star Three"
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
                          alt="bag Three"
                        />
                      </Button>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
            <div className="bg-black_902 flex flex-col font-metropolis items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] mt-[150px] p-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] rounded-radius20 w-[100%]">
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

export default EducatsyCoursesDetailsPage;
