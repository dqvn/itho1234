import React from "react";

import {
  Img,
  Text,
  SelectBox,
  List,
  Button,
  Grid,
  Stack,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const EducatsyShopPage = () => {
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
                    className="cursor-pointer font-medium text-[16px] text-gray_901 text-left"
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
            <div className="bg-red_52 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start max-w-[1280px] ml-[auto] mr-[auto] p-[19px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius20 w-[100%]">
              <Text
                className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-black_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Home | Shop
              </Text>
              <Text
                className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] md:mt-[0] sm:mt-[0] mt-[65px] text-gray_901 text-left"
                as="h2"
                variant="h2"
              >
                Educatsy Online
                <br />
                Book Shop
              </Text>
              <Img
                src="images/img_kisspngbookcas.png"
                className="h-[210px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[167px] md:mt-[0] sm:mt-[0] mt-[20px] object-cover md:w-[100%] sm:w-[100%] w-[31%]"
                alt="kisspngbookcas"
              />
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[40px] items-start justify-start max-w-[1280px] ml-[auto] mr-[auto] mt-[40px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <List
                className="flex flex-col sm:flex-none sm:gap-[15px] md:gap-[29px] gap-[40px] sm:self-stretch sm:w-[100%] w-[32%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Popular Books
                  </Text>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mt-[14px] p-[22px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image14.png"
                        className="h-[90px] sm:h-[auto] object-cover rounded-radius5 w-[24%]"
                        alt="imageFourteen"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="h-[16px] object-cover w-[41%]"
                          alt="mobile"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-black_900 text-left"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold text-left text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mt-[15px] p-[22px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="h-[90px] sm:h-[auto] object-cover rounded-radius5 w-[24%]"
                        alt="Image"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="h-[16px] object-cover w-[41%]"
                          alt="mobile One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-black_900 text-left"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold text-left text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mt-[15px] p-[22px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[90px] sm:h-[auto] object-cover rounded-radius5 w-[24%]"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="h-[16px] object-cover w-[41%]"
                          alt="mobile Two"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-black_900 text-left"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold text-left text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[20px] text-left text-red_300 w-[auto]"
                    variant="body3"
                  >
                    See More
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    New Arrivals
                  </Text>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mt-[14px] p-[22px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image14.png"
                        className="h-[90px] sm:h-[auto] object-cover rounded-radius5 w-[24%]"
                        alt="imageFourteen One"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="h-[16px] object-cover w-[41%]"
                          alt="mobile One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-black_900 text-left"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold text-left text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mt-[15px] p-[22px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="h-[90px] sm:h-[auto] object-cover rounded-radius5 w-[24%]"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="h-[16px] object-cover w-[41%]"
                          alt="mobile One One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-black_900 text-left"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold text-left text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mt-[15px] p-[22px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[90px] sm:h-[auto] object-cover rounded-radius5 w-[24%]"
                        alt="Image One One"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="h-[16px] object-cover w-[41%]"
                          alt="mobile Two One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-black_900 text-left"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold text-left text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[20px] text-left text-red_300 w-[auto]"
                    variant="body3"
                  >
                    See More
                  </Text>
                </div>
              </List>
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start rounded-radius10 md:w-[100%] sm:w-[100%] w-[74%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[22%] text-[16px] text-center text-white_A700 w-[max-content]"
                    size="xl"
                    variant="FillOrange200"
                  >
                    All Books
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[25%] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="xl"
                    variant="FillWhiteA700"
                  >
                    Kindergarten
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[25%] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="xl"
                    variant="FillWhiteA700"
                  >
                    High School
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[20%] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="xl"
                    variant="FillWhiteA700"
                  >
                    College
                  </Button>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[15px] items-center justify-between mt-[30px] w-[100%]">
                  <div className="bg-white_A700 flex flex-row sm:gap-[40px] items-center justify-between p-[7px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-medium text-gray_700_99 text-left w-[auto]"
                      variant="body5"
                    >
                      Search Class, Course, Book Name
                    </Text>
                    <Button className="cursor-pointer h-[46px] text-center w-[46px]"></Button>
                  </div>
                  <SelectBox
                    className="font-medium leading-[normal] sm:mx-[0] text-[16px] text-gray_700_99 text-left sm:w-[100%] w-[33%]"
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
                <div className="flex flex-col items-center justify-start mt-[30px] w-[100%]">
                  <Grid className="gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image14.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Two"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Two"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_90X75.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Three"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_240X230.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Four"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Four"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_2.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Five"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Five"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_1.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Six"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Six"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_3.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Seven"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Seven"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_90X75.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Eight"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Eight"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image14.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Nine"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Nine"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_1.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] object-cover rounded-radius10 w-[86%]"
                            alt="Image Ten"
                          />
                        </Stack>
                        <Text
                          className="font-semibold mt-[15px] text-gray_901 text-left w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[10px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-left text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="h-[16px] object-cover w-[35%]"
                            alt="mobile Ten"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </div>
                <div className="flex flex-row items-start justify-center md:ml-[0] sm:ml-[0] ml-[278px] mt-[50px] md:w-[100%] sm:w-[100%] w-[34%]">
                  <Button
                    className="flex h-[44px] items-center justify-center w-[44px]"
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
                  <Text
                    className="font-medium ml-[20px] mt-[14px] text-gray_901 text-left w-[auto]"
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
                    of 80
                  </Text>
                  <Button
                    className="flex h-[44px] items-center justify-center ml-[21px] w-[44px]"
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

export default EducatsyShopPage;
