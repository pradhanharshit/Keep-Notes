import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredNotes,
  setDateSort,
  setPriorityFilter,
  setSearchFilter,
  setlabelFilter,
} from "../../../store/notesSlice";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const {
    mynotes,
    labelsArray,
    newNoteRender,
    noteAdded,
    dateSort,
    priorityFilter,
    labelFilter,
    searchFilter,
  } = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openSort, setOpenSort] = useState(false);

  useEffect(() => {
    const filteredNotes = mynotes
      .filter((note) => {
        if (priorityFilter !== "") {
          return note.priority === priorityFilter;
        } else return note;
      })
      .filter((note) => {
        if (labelFilter !== "") {
          return note.tags.includes(labelFilter);
        } else return note;
      })
      .filter((note) => {
        if (searchFilter !== "") {
          return (
            note.title.includes(searchFilter) ||
            note.body.includes(searchFilter)
          );
        } else return note;
      })
      .sort((a, b) => {
        if (dateSort === "newest") {
          return (
            Number(b.date.split("/").join("")) -
            Number(a.date.split("/").join(""))
          );
        }
        if (dateSort === "oldest") {
          return (
            Number(a.date.split("/").join("")) -
            Number(b.date.split("/").join(""))
          );
        }
      });

    dispatch(addFilteredNotes(filteredNotes));
    console.log(filteredNotes);
  }, [
    noteAdded,
    newNoteRender,
    dateSort,
    priorityFilter,
    labelFilter,
    searchFilter,
  ]);

  const clearHandler = () => {
    dispatch(setDateSort(""));
    dispatch(setlabelFilter(""));
    dispatch(setPriorityFilter(""));
    setOpenSort(false);
    dispatch(addFilteredNotes(mynotes));
  };

  return (
    <>
      <div className="search-container w-[21.5rem]">
        <MagnifyingGlassIcon className="stroke-blue-400 search-icon h-[20px] w-[20px]" />
        <input
          type="text"
          className="search-input rounded-3xl w-[100%]"
          placeholder="Search..."
          value={searchFilter}
          style={{ backgroundColor: themeObject.secondary }}
          onFocus={() => navigate("/")}
          onChange={(e) => {
            dispatch(setSearchFilter(e.target.value));
          }}
        />
      </div>
      <div className="sort-container">
        <div>
          <AdjustmentsHorizontalIcon
            className="h-[35px] w-[35px] stroke-blue-400 cursor-pointer"
            onClick={() => {
              setOpenSort(!openSort);
              navigate("/");
            }}
          />
          <ClickOutHandler onClickOut={() => setOpenSort(false)}>
            <div className="relative text-center">
              {openSort && (
                <div
                  className="sort-container absolute w-max p-3 rounded-2xl border-2 border-blue-400"
                  style={{ backgroundColor: themeObject.secondary }}
                >
                  <div
                    className="date-sort mb-3"
                    style={{ backgroundColor: themeObject.secondary }}
                  >
                    <p className="font-bold text-base text-blue-400 mb-2">
                      Sort by date
                    </p>
                    <div>
                      <input
                        className="date-sort"
                        name="date"
                        id="new-date-sort"
                        type="radio"
                        onChange={() => dispatch(setDateSort("newest"))}
                        checked={dateSort === "newest"}
                      />
                      <label
                        style={{ color: themeObject.text }}
                        htmlFor="new-date-sort"
                        onClick={() => dispatch(setDateSort("newest"))}
                      >
                        Newest First
                      </label>
                    </div>

                    <div>
                      <input
                        className="date-sort"
                        name="date"
                        id="old-date-sort"
                        type="radio"
                        onChange={() => dispatch(setDateSort("oldest"))}
                        checked={dateSort === "oldest"}
                      />
                      <label
                        style={{ color: themeObject.text }}
                        htmlFor="old-date-sort"
                        onClick={() => dispatch(setDateSort("oldest"))}
                      >
                        Oldest First
                      </label>
                    </div>
                  </div>
                  {/* Priority Filter Div */}
                  <div
                    className="priority-filter"
                    style={{ backgroundColor: themeObject.secondary }}
                  >
                    <p className="font-bold text-base text-blue-400 mb-2">
                      Filter through priority
                    </p>
                    <div>
                      <input
                        className="filter-priority"
                        type="radio"
                        id="high-priority-sort"
                        name="priority"
                        onChange={() =>
                          dispatch(setPriorityFilter("high-priority"))
                        }
                        checked={priorityFilter === "high-priority"}
                      />
                      <label
                        htmlFor="high-priority-sort"
                        style={{ color: themeObject.text }}
                        onClick={() =>
                          dispatch(setPriorityFilter("high-priority"))
                        }
                      >
                        High Priority
                      </label>
                    </div>

                    <div>
                      <input
                        className="filter-priority"
                        type="radio"
                        id="medium-priority-sort"
                        name="priority"
                        onChange={() =>
                          dispatch(setPriorityFilter("medium-priority"))
                        }
                        checked={priorityFilter === "medium-priority"}
                      />
                      <label
                        htmlFor="medium-priority-sort"
                        style={{ color: themeObject.text }}
                        onClick={() =>
                          dispatch(setPriorityFilter("medium-priority"))
                        }
                      >
                        Medium Priority
                      </label>
                    </div>

                    <div>
                      <input
                        className="filter-priority"
                        type="radio"
                        id="low-priority-sort"
                        name="priority"
                        onChange={() =>
                          dispatch(setPriorityFilter("low-priority"))
                        }
                        checked={priorityFilter === "low-priority"}
                      />
                      <label
                        htmlFor="low-priority-sort"
                        style={{ color: themeObject.text }}
                        onClick={() =>
                          dispatch(setPriorityFilter("low-priority"))
                        }
                      >
                        Low Priority
                      </label>
                    </div>
                  </div>

                  <div
                    className="label-filter mt-3"
                    style={{ backgroundColor: themeObject.secondary }}
                  >
                    <p className="font-bold text-base text-blue-400 mb-2">
                      Filter through label
                    </p>
                    {labelsArray.length > 0 &&
                      labelsArray.map((label, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="radio"
                              name="labels"
                              id={`${label}Tag`}
                              value={label}
                              onChange={() => dispatch(setlabelFilter(label))}
                              checked={labelFilter === label}
                            />
                            <label
                              htmlFor={`${label}Tag`}
                              onClick={() => dispatch(setlabelFilter(label))}
                            >
                              {label}
                            </label>
                          </div>
                        );
                      })}
                  </div>

                  <button
                    className="px-2 py-1 bg-blue-400 rounded-xl mt-3"
                    style={{ color: themeObject.text }}
                    onClick={clearHandler}
                  >
                    clear
                  </button>
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
    </>
  );
};

export default Filter;
