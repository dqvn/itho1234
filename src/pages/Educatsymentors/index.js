import React from "react";

import { Img, Text, SelectBox, Button, Grid, Slider, Input } from "components";
import { useNavigate } from "react-router-dom";

const EducatsymentorsPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter gap-[50px] items-center justify-start mx-[auto] w-[100%]">
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
                  className="cursor-pointer font-medium text-[16px] text-gray_901 text-left"
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
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="bg-red_52 flex flex-col items-start justify-start max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] p-[19px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius20 w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[10px] md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[88%]">
              <Text
                className="font-medium text-black_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Home | Our Mentors
              </Text>
              <Text
                className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] md:ml-[0] sm:ml-[0] ml-[2px] md:mt-[0] sm:mt-[0] mt-[65px] text-gray_901 text-left"
                as="h2"
                variant="h2"
              >
                Educatsy has the
                <br />
                qualified mentor
              </Text>
              <Img
                src="images/img_49063311.svg"
                className="h-[209px] md:ml-[0] sm:ml-[0] ml-[124px] md:mt-[0] sm:mt-[0] mt-[11px] object-cover w-[39%]"
                alt="49063311"
              />
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[80px] mt-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[64%]">
            <Button
              className="cursor-pointer font-medium min-w-[17%] text-[16px] text-black_900 text-center w-[max-content]"
              size="xl"
              variant="FillWhiteA700"
            >
              All Mentors
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[21%] text-[16px] text-black_900 text-center w-[max-content]"
              size="xl"
              variant="FillWhiteA700"
            >
              For Kindergarten
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[20%] text-[16px] text-center text-white_A700 w-[max-content]"
              size="xl"
              variant="FillOrange200"
            >
              For high school
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[16%] text-[16px] text-black_900 text-center w-[max-content]"
              size="xl"
              variant="FillWhiteA700"
            >
              For college
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[20%] text-[16px] text-black_900 text-center w-[max-content]"
              size="xl"
              variant="FillWhiteA700"
            >
              For Technology
            </Button>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1280px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Grid className="sm:gap-[15px] md:gap-[29px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
              <div
                className="common-pointer flex flex-col gap-[10px] items-center justify-start w-[100%]"
                onClick={() => navigate("/singlementordetails")}
              >
                <Img
                  src="images/img_bg.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5493"
                    placeholder="Kristin Watson"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_290X290.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG One"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5472"
                    placeholder="Brooklyn Simmons"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_1.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG Two"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5486"
                    placeholder="Robert Fox"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_2.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG Three"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5479"
                    placeholder="Wade Warren"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_3.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG Four"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5496"
                    placeholder="Bessie Cooper"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_4.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG Five"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5475"
                    placeholder="Ronald Richards"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_5.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG Six"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5489"
                    placeholder="Guy Hawkins"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_bg_6.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                  alt="BG Seven"
                />
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <SelectBox
                    className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group5482"
                    placeholder="Floyd Miles"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
                    <Text
                      className="text-gray_700 text-left w-[auto]"
                      variant="body6"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
            </Grid>
            <div className="flex flex-col items-center justify-end w-[100%]">
              <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                <Slider
                  slidesToShow={4}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="w-[100%]"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-[10px] items-center justify-start">
                        <Img
                          src="images/img_bg_7.png"
                          className="h-[290px] sm:h-[auto] object-cover rounded-radius10 w-[290px]"
                          alt="BG Eight"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                          <SelectBox
                            className="font-medium text-[16px] text-black_900 text-left w-[100%]"
                            placeholderClassName="text-black_900"
                            name="Group5485"
                            placeholder="Jerome Bell"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_black_900.svg"
                                className="h-[24px] mr-[0] w-[24px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                          <Text
                            className="text-gray_700 text-left w-[auto]"
                            variant="body6"
                          >
                            Founder & Mentor
                          </Text>
                        </div>
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
          </div>
          <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[578px] mt-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] px-[64px] md:w-[100%] sm:w-[100%] w-[20%]">
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
              01
            </Button>
            <Text
              className="font-medium ml-[15px] mt-[14px] text-gray_901 text-left w-[auto]"
              variant="body5"
            >
              of 03
            </Text>
          </div>
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
    </>
  );
};

export default EducatsymentorsPage;
