import  { Suspense, useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import useCreateNotes from "../hooks/useCreateNotes";
import Form from "../components/form/Form";
import BackButton from "../components/BackButton/BackButton";
import FormInput from "../components/input/FormInput";
import SectionHeader from "../components/page/SectionHeader";
import Loader from "../components/loader/Loader";
import { inputValidations } from "../utils/validations";
import toast from "react-hot-toast";
import CreateNoteSkeleton from "../components/skeletons/CreateNoteSkeleton";

function Create() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const { createNotes, isLoading } = useCreateNotes();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const validation = inputValidations({
      title: formData.title,
      description: formData.description,
    });

    if (!validation.success) {
      toast.error(`All fields are required`);
      return;
    }

    const { success, message, isRateLimited } = await createNotes({
      title: formData.title,
      description: formData.description,
    });
    if (!success) {
      toast.error(message);
      return;
    }

    if (isRateLimited) {
      toast.error(`Slow down! You are creating the notes to fast`, {
        duration: 4000,
        icon: "💀",
      });
      return;
    }
    toast.success(`Notes created successfully`);
    navigate("/");
  }
  return (
    <Suspense fallback={<CreateNoteSkeleton />}>
      <Layout style={"min-h-screen bg-base-200 px-2"}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <BackButton title="Back to Notes" link={"/"} />
            <div className="card bg-base-100">
              <div className="card-body">
                <SectionHeader title={"Create New Note"} />
                <Form onSubmitHandler={handleSubmit}>
                  <FormInput
                    label={"Title"}
                    labelRef={"title"}
                    inputId={"title"}
                    type={"text"}
                    placeholder={"Note Title"}
                    value={formData.title}
                    style={"input input-bordered"}
                    onChangeHandler={(event) =>
                      setFormData({ ...formData, title: event.target.value })
                    }
                  />
                  <FormInput
                    label={"Description"}
                    labelRef={"description"}
                    inputId={"description"}
                    placeholder={"Write Note Description"}
                    value={formData.description}
                    style={"textarea textarea-bordered h-32"}
                    onChangeHandler={(event) =>
                      setFormData({
                        ...formData,
                        description: event.target.value,
                      })
                    }
                  />
                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader text={"Creating...."} />
                      ) : (
                        "Create Notes"
                      )}
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Create;
