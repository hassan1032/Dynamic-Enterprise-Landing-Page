import Content from "../models/Content.js";

export const getContent = async (req, res) => {
  try {
    const content = await Content.findOne();
    if (!content) {
      return res.status(404).json({ success: false, message: "Content not found"});
 }
    return res.status(200).json({ success: true, data: content });
  } catch (error) {
    return res.status(500).json({success: false, message: "Failed to fetch content", error: error.message });
  }
};
export const updateContent = async (req, res) => {
  try {
    const updatedContent = await Content.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
    if (!updatedContent) {
      return res.status(404).json({ success: false,  message: "Content not found to update"});
    }
    return res.status(200).json({ success: true, message: "Content updated successfully", data: updatedContent });
  } catch (error) {
    return res.status(500).json({success: false,message: "Failed to update content",error: error.message });
  }
};
