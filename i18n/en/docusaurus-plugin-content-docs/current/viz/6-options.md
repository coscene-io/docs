---
sidebar_position: 6
---

# Visualization Options

There are several additional options available for visualization settings.

## TF Compatibility Mode

TF2, as an iteration of TF, enforces stricter naming conventions for frame_ids. According to the specification, frame_ids should not begin with a forward slash (`/`). This change came with TF2's removal of tf_prefix support, adopting a simpler and more consistent naming strategy where all frame_ids are treated as string literals.

However, in practice, you might still encounter frame_ids starting with `/` due to various reasons:

- Legacy code migrated from TF1
- Developers following old coding habits
- Publishers not strictly adhering to TF2 naming conventions

This non-standard naming can lead to inconsistencies in the system. For example, the same coordinate frame might appear as both `base_link` and `/base_link`, which affects the proper construction of the TF tree and prevents accurate coordinate transformations.

To address this issue, Kekeliu has implemented a compatibility mode in the visualization system, following RViz's approach. When this option is enabled, the player will attempt to unify all TF messages for consistency.

Official reference: [TF Prefix Backwards Compatibility](https://wiki.ros.org/tf2/Migration#tf_prefix_backwards_compatibility)
