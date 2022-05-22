import { useEffect, useState } from "react";
import dataList from "../data.json";
import LineChart from "./LineChart";
import { Line } from "react-chartjs-2";

const Filter = () => {
    let retrevingdataR = () => dataRetreving.map((ele) => {
        return (<>
            <div>{ele.schoolName}</div>
            <div>{ele.totalLessons}</div>
        </>
        )
    })
    const [totallessons, setTotalLessons] = useState(0);
    const [dataRetreving, setDataRetreving] = useState([]);

    const [itemsAfter, setItemsAfter] = useState(dataList);
    const [campsAfter, setCampsAfter] = useState([]);
    const [schoolsAfter, setSchoolsAfter] = useState([]);
    
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [selectedCamp, setSelectedCamp] = useState("All");
    const [selectedSchool, setSelectedSchool] = useState("All");

    const months = dataList.map((item) => item.month);
    let allMonths = months.filter((c, index) => {
        return months.indexOf(c) === index;
    });

    const countries = dataList.map((item) => item.country);
    let allCountries = countries.filter((c, index) => {
        return countries.indexOf(c) === index;
    });
    useEffect(() => {
        let afterCountry = dataList.filter((items) => {
            if (items.country === selectedCountry) {
                return items;
            }
        });
        let afterCamp = () => {
            if (selectedCamp == "All") {
                return afterCountry;
            } else {
                return afterCountry.filter((items) => {
                    if (items.camp === selectedCamp) {
                        return items;
                    }
                });
            }
        };
        let afterCamp1 = afterCamp();
        let afterSchool = () => {
            if (selectedSchool == "All") {
                return afterCamp1;
            } else {
                return afterCamp1.filter((items) => {
                    if (items.school === selectedSchool) {
                        return items;
                    }
                });
            }
        };
        let afterSchool1 = afterSchool();
        setItemsAfter(afterSchool1);

        console.log(afterSchool1);

        const allCamps = afterCountry.map((data) => data.camp);
        let newCamps = allCamps.filter((c, index) => {
            return allCamps.indexOf(c) === index;
        });
        setCampsAfter(newCamps);
    }, [selectedCountry]);

    useEffect(() => {
        let afterCountry = dataList.filter((items) => {
            if (items.country === selectedCountry) {
                return items;
            }
        });
        let afterCamp = () => {
            if (selectedCamp == "All") {
                return afterCountry;
            } else {
                return afterCountry.filter((items) => {
                    if (items.camp === selectedCamp) {
                        return items;
                    }
                });
            }
        };
        let afterCamp1 = afterCamp();
        let afterSchool = () => {
            if (selectedSchool == "All") {
                return afterCamp1;
            } else {
                return afterCamp1.filter((items) => {
                    if (items.school === selectedSchool) {
                        return items;
                    }
                });
            }
        };
        let afterSchool1 = afterSchool();
        setItemsAfter(afterSchool1);

        const aftersc = afterSchool1.map((data) => data.school);
        let newCamps = aftersc.filter((c, index) => {
            return aftersc.indexOf(c) === index;
        });

        setSchoolsAfter(newCamps);
    }, [selectedCamp]);

    useEffect(() => {
        let afterCountry = dataList.filter((items) => {
            if (items.country === selectedCountry) {
                return items;
            }
        });
        let afterCamp = () => {
            if (selectedCamp == "All") {
                return afterCountry;
            } else {
                return afterCountry.filter((items) => {
                    if (items.camp === selectedCamp) {
                        return items;
                    }
                });
            }
        };
        let afterCamp1 = afterCamp();
        let afterSchool = () => {
            if (selectedSchool == "All") {
                return afterCamp1;
            } else {
                return afterCamp1.filter((items) => {
                    if (items.school == selectedSchool) {
                        return items;
                    }
                });
            }
        };
        let afterSchool1 = afterSchool();
        setItemsAfter(itemsAfter);

        console.log(afterSchool1);
    }, [selectedSchool]);

    const [itemscountries, setItemsCountries] = useState({
        itemsSchool: itemsAfter,
        countries: allCountries,
    });

    var len = itemscountries.itemsSchool.length,
        output = [];
    for (var i = 0; i < len; i++) {
        output.push(itemscountries.itemsSchool[i].school);
    }
    const [userData, setUserData] = useState({
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "No. of Lessons",
                data: itemsAfter.map((data) => data.lessons),
                backgroundColor: [
                    "rgba(70,189,133,1)",
                    "#ecf2f3",
                    "#30Cd83",
                    "#f2caad",
                    "#2b30e0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    let getRandomColor = () => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        let readyForChart = [];
        let schoools = []

        schoolsAfter.map((x) => {
            const oneSchools = []
            itemsAfter.map((item) => {
                if (item.school == x) {
                    oneSchools.push(item)
                }

            })
            schoools.push(oneSchools)
        })

        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        let lastOutput = []
        schoools.map((scll) => {
            console.log(scll.map((i) => i.month));
        })
        console.log(lastOutput)
        console.log(schoools)

        schoools.map((sc) => {
            readyForChart.push({
                label: '',
                data: sc.map((data) => data.lessons),
                backgroundColor: [
                    "rgba(70,189,133,1)",
                    "#ecf2f3",
                    "#30Cd83",
                    "#f2caad",
                    "#2b30e0",
                ],
                borderColor: getRandomColor,
                borderWidth: 2,
            });
        })
        let dataRetrevin = []
        let totalLess = 0
        schoools.map((ele) => {


            let totalLessons = 0

            ele.map((item) => {
                totalLessons = totalLessons + item.lessons
            })

            let schoolName = ele[0].school;
            dataRetrevin.push({
                'totalLessons': totalLessons,
                'schoolName': schoolName
            })

            totalLess = totalLess + totalLessons;

        })
        console.log(dataRetrevin)
        console.log(totalLess)

        setDataRetreving(dataRetrevin);
        setTotalLessons(totalLess)

        setUserData({
            labels: months,
            datasets: readyForChart,
        });

    }, [itemsAfter, selectedSchool]);

    return (
        <div className="container">

            {/* Header */}
            <div className="title">
                <h1>Analysis chart</h1>
            </div>
            <div className="sub-title">
                <p>Number of lessons</p>
            </div>

            {/* Dropdowns Wrapper */}
            <div className="dropdowns-wrapper">

                {/* Select Country Dropdown */}
                <div className="dropdown-item">
                    <span>Select Country</span>
                    <select onChange={(e) => setSelectedCountry(e.target.value)}>
                        <option selected value="All">
                            Choose
                        </option>
                        {allCountries.map((data) => (
                            <option value={data}>{data}</option>
                        ))}
                    </select>
                </div>

                {/* Select Camp Dropdown */}
                <div className="dropdown-item">
                    <span>Select Camp</span>
                    <select onChange={(e) => setSelectedCamp(e.target.value)}>
                        <option selected value="All`">
                            Choose
                        </option>
                        {campsAfter.map((data) => (
                            <option value={data}>{data}</option>
                        ))}
                    </select>
                </div>

                {/* Select School Dropdown */}
                <div className="dropdown-item">
                    <span>Select School</span>
                    <select onChange={(e) => setSelectedSchool(e.target.value)}>
                        <option value="All">Show all</option>
                        {schoolsAfter.map((data) => (
                            <option value={data}>{data}</option>
                        ))}
                    </select>
                </div>

            </div>

            {/* Chart Sec */}
            <div className="chart-sec">

                {/* Chart */}
                <div className="chart-wrapper">
                    <Line data={userData} />
                </div>

                {/* Total Lessons List */}
                <div className="lessons-list">
                    <div class="total-lessons">Total lessons : {totallessons}</div>
                    {dataRetreving.map((f) => {
                        return (
                            <div className="school-lessons">
                                <div className="lessons"><span className="total-number">{f.totalLessons}</span> <span>lessons</span></div>
                                <div className="school-name">in {f.schoolName}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
            
        </div>
    );
};

export default Filter;