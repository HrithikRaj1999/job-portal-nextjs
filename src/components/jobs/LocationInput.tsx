import React, { RefObject, forwardRef, useMemo, useState } from "react";
import { Input } from "../ui/input";
import CITIES from "../../constants/jobs/city-list";
interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}
const LocationInput = forwardRef<HTMLInputElement, LocationInputProps>(
  ({ onLocationSelected, ...props }: LocationInputProps, ref) => {
    const [location, setLocation] = useState("");
    const [hasFocus, setHasFocus] = useState(false);
    const cities = useMemo(() => {
      if (!location.trim()) return [];
      const searchWords = location.trim().split(" ");
      const citiesCombinedList = CITIES.map(
        (city) => `${city.name}, ${city.subcountry}, ${city.country}`,
      );
      return citiesCombinedList
        .filter(
          (cityStringdata) =>
            cityStringdata
              .toLowerCase()
              .startsWith(searchWords[0].toLocaleLowerCase()) &&
            searchWords.every((word) =>
              cityStringdata.toLowerCase().includes(word.toLocaleLowerCase()),
            ),
        )
        .slice(0, 5);
    }, [location]);

    console.log({ location });
    return (
      <div className="relative">
        <Input
          {...props}
          type="search"
          ref={ref}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {location.trim() && hasFocus ? (
          <div className="absolute z-50 w-full divide-y bg-background shadow-xl ">
            {!cities.length ? (
              <p>No Cities Found !</p>
            ) : (
              <div className="flex flex-col   ">
                {cities.map((city) => (
                  <button
                    key={city}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      setLocation(city);
                    }}
                    className="w-full border border-slate-200 px-1 py-1 text-start"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  },
);

export default LocationInput;
