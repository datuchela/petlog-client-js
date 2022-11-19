import { useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// custom hooks
import useForm from "../../hooks/useForm";
import useReminder from "../../hooks/useReminder";
import usePets from "../../hooks/usePets";

// UI Components
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";
import VerticalInput from "../../components/molecules/VerticalInput";
import Link from "../../components/atoms/Link";
import VerticalSelect from "../../components/molecules/VerticalSelect";
import Select from "../../components/atoms/Select";
import Label from "../../components/atoms/Label";
import TextInput from "../../components/atoms/TextInput";

const AddReminderPage = () => {
  const navigate = useNavigate();
  const [form, handleChange, setForm] = useForm({
    name: "",
    upcoming: "",
    intervalValue: "",
    intervalType: 0,
    petId: "",
  });

  const { pets, isLoading: petsIsLoading } = usePets();

  useLayoutEffect(() => {
    setForm((prev) => ({ ...prev, petId: `${pets[0]?.id}` }));
  }, [pets]);

  const { addReminder } = useReminder();
  const { isLoading, isError, isSuccess, data, mutate } = addReminder();

  useEffect(() => {
    if (!isSuccess) return;
    return navigate("/", { replace: true });
  }, [isSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <>
      <Heading>Let us know what to track</Heading>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <VerticalInput
              type="text"
              name="name"
              label="Reminder Name"
              emoji="📝"
              placeholder="Monthly Checkup"
              value={form.name}
              handleChange={handleChange}
            />
            <VerticalSelect
              name="petId"
              label="For"
              value={form.petId}
              onChange={handleChange}
            >
              {petsIsLoading ? (
                <option>Loading...</option>
              ) : (
                pets?.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name}
                  </option>
                ))
              )}
            </VerticalSelect>
          </div>
          <div className="flex items-center gap-6">
            <VerticalInput
              type="date"
              name="upcoming"
              label="Upcoming Date"
              emoji="📆"
              placeholder="17/03/2018"
              value={form.upcoming}
              handleChange={handleChange}
            />
            <div className="flex flex-col gap-2">
              <Label>Interval</Label>
              <div className="flex items-center w-[272px] h-12 border border-[#727272] rounded-lg overflow-hidden">
                <TextInput
                  type="text"
                  name="intervalValue"
                  label="interval value"
                  emoji="⏱"
                  placeholder="5 day(s)"
                  wrapperStyle="w-full h-full rounded-none border-none"
                  value={form.intervalValue}
                  handleChange={handleChange}
                  inputMode="decimal"
                />
                <Select
                  type="text"
                  name="intervalType"
                  label="interval type"
                  emoji="⏱"
                  placeholder="day(s)"
                  styling="rounded-none border-r-0 border-t-0 border-b-0 border-gray-300 max-w-[100px]"
                  value={form.intervalType}
                  onChange={handleChange}
                >
                  <option value={0}>day(s)</option>
                  <option value={1}>week(s)</option>
                  <option value={2}>month(s)</option>
                  <option value={3}>year(s)</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button disabled={isLoading} type="submit" className="w-full">
            Add Reminder
          </Button>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-600 font-medium">
              By submitting this form, you agree to petLog's
            </span>
            <Link className={"text-blue-500 hover:text-blue-400"} to="/tos">
              Terms of Service
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddReminderPage;
